'use strict';

const Countries = require('i18n-iso-countries');
const uuid = require('uuid');
const MasterDataService = require('../../../service/master-data');

const cacheHelper = require('../common').cacheHelper;
const cacheNames = require('../../../lib/user-cache-policies').names;

const setConfirmation = require('../common').setConfirmation;
const setChallengeStatus = require('../common').setChallengeStatus;
const setValidationStatus = require('../common').setValidationStatus;
const errHdlr = require('../../../lib/utils').generalErrorHandler;
const isNumeric = require('../../../lib/utils').isNumeric;

const internals = {};

/**
 * Reads the cache (keys and constructs a deep enriched transfer object
 * @param obj - transfer object
 * @return {Promise.<{ewc: {activity: *, chapter: *, subChapter: *}, wfd: {disposal: *, recovery: *}, value}>}
 */
internals.enrichWasteTransferObject = async (userContext, obj) => {
    const result = {
        ewc: {
            activity: await MasterDataService.getEwcActivityById(obj.ewc.activityId),
            chapter: await MasterDataService.getEwcChapterById(obj.ewc.chapterId),
            subChapter: await MasterDataService.getEwcSubChapterById(obj.ewc.subChapterId)
        },

        wfd: {
            disposal: obj.wfd.disposalId ? await MasterDataService.getDisposalById(obj.wfd.disposalId) : null,
            recovery: obj.wfd.recoveryId ? await MasterDataService.getRecoveryById(obj.wfd.recoveryId) : null
        },

        method: obj.method
    };

    if (obj.brt) {
        result.brt = true;
    } else {
        result.value = obj.value;
    }

    result.overseas = {};

    if (obj.overseas) {
        const keys = Object.keys(obj.overseas).filter(k => k !== 'currentKey');
        for (const key of keys) {
            result.overseas[key] = {
                method: obj.overseas[key].method,
                value: obj.overseas[key].value,
                businessAddress: userContext.addresses.business[obj.overseas[key].businessAddress],
                siteAddress: userContext.addresses.site[obj.overseas[key].siteAddress]
            };
        }
    }

    return result;
};

/**
 * Returns the EWC code from the input string
 * @param ewc
 * @returns {Promise<*>}
 */
internals.ewcFromStr = async function (ewc) {
    let ewcObj;

    if (ewc) {
        const expr = new RegExp('^\\s*?(\\d{2})[\\s\\-\\.]*?(\\d{2})[\\s-\\.]*?(\\d{2})\\s*$');
        const matched = ewc.match(expr);

        if (matched) {
            const [, chapter, subChapter, activity] = matched;
            ewcObj = await MasterDataService.getEwc(chapter, subChapter, activity);
        }
    }
    return ewcObj;
};

/**
 * Returns the disposal OR recovery from the input string
 * @param wfd
 * @returns {Promise<{disposal: *, recovery: *}>}
 */
internals.disposalOrRecoveryFromStr = async function (wfd) {
    let disposal;
    let recovery;
    if (wfd) {
        disposal = await MasterDataService.getDisposalCode(wfd.toUpperCase());

        if (!disposal) {
            recovery = await MasterDataService.getRecoveryCode(wfd.toUpperCase());
        }
    }
    return {disposal, recovery};
};

/**
 * Locate a given transfer in the cache
 * @param tasks
 * @param transfer
 * @returns {number}
 */
internals.findTransfer = (tasks, transfer) => {
    try {
        return tasks.transfers.findIndex(t =>
            t.ewc.activityId === transfer.ewc.activityId &&
      t.ewc.chapterId === transfer.ewc.chapterId &&
      t.ewc.subChapterId === transfer.ewc.subChapterId &&
      t.wfd.disposalId === transfer.wfd.disposalId &&
      t.wfd.recoveryId === transfer.wfd.recoveryId
        );
    } catch (err) {
        return -1;
    }
};

/**
 * Payload str is like chapterId-SubChapterId-activityId-disposalId-recoveryId
 */
internals.findTransferFromPayloadString = (tasks, payloadStr) => {
    const [ chapterId, subChapterId, activityId, disposalId, recoveryId ] = payloadStr.split('-');
    const transObj = {
        ewc: {
            chapterId: Number.parseInt(chapterId),
            subChapterId: Number.parseInt(subChapterId),
            activityId: Number.parseInt(activityId)
        },
        wfd: {
            disposalId: disposalId ? Number.parseInt(disposalId) : null,
            recoveryId: recoveryId ? Number.parseInt(recoveryId) : null
        }
    };
    return internals.findTransfer(tasks, transObj);
};

/**
 * Validator for the code page
 * @param payload
 * @param cacheState
 * @returns {Promise<*>}
 */
internals.validateCode = async (payload, cacheState) => {

    const { ewc, value, wfd, brt } = payload;
    const result = [];

    if (brt) {
        if (value.trim()) {
            result.push({ key: 'value', errno: 'PI-2003' });
        }
    } else {
        if (!isNumeric(value)) {
            result.push({ key: 'value', errno: 'PI-2000' });
        }
    }

    const ewcObj = await internals.ewcFromStr(ewc);

    if (ewcObj) {
        const activity = await MasterDataService.getEwcActivityById(ewcObj.activityId);
        if (activity.hazardous && brt) {
            result.push({ key: 'brt', errno: 'PI-2005' });
        }
    }

    if (!ewcObj) {
        result.push({ key: 'ewc', errno: 'PI-2001' });
    }

    const { disposal, recovery } = await internals.disposalOrRecoveryFromStr(wfd);

    if (!disposal && !recovery) {
        result.push({ key: 'wfd', errno: 'PI-2002' });
    }

    // If the user has entered legit codes check for a duplicate
    if (ewcObj && (disposal || recovery)) {
        const cacheObject = await internals.createWasteTransferCacheObject(payload);
        if (internals.findTransfer(cacheState.tasks, cacheObject) !== -1) {
            result.push({ key: 'waste', errno: 'PI-2004' });
        }
    }

    return result.length > 0 ? result : null;
};

/**
 * Validate the business address
 * @param payload
 * @returns {Promise<*>}
 */
internals.validateBusinessAddress = async (payload) => {

    const result = [];

    if (!payload.addressLine1) {
        result.push({key: 'address-line-1', errno: 'PI-3010'});
    }

    if (!payload.businessName) {
        result.push({key: 'business-name', errno: 'PI-3011'});
    }

    if (!payload.country) {
        result.push({key: 'country', errno: 'PI-3012'});
    }

    if (!payload.townOrCity) {
        result.push({key: 'town-or-city', errno: 'PI-3013'});
    }

    if (!payload.addressLine1) {
        result.push({key: 'address-line-1', errno: 'PI-3020'});
    }

    if (payload.country === '--') {
        result.push({key: 'country', errno: 'PI-3022'});
    }

    if (!payload.townOrCity) {
        result.push({key: 'town-or-city', errno: 'PI-3023'});
    }

    return result.length > 0 ? result : null;
};

/**
 * Validate the business address
 * @param payload
 * @returns {Promise<*>}
 */
internals.validateSiteAddress = async (payload) => {

    const result = [];

    if (!payload.addressLine1) {
        result.push({key: 'address-line-1', errno: 'PI-3010'});
    }

    if (!payload.country) {
        result.push({key: 'country', errno: 'PI-3012'});
    }

    if (!payload.townOrCity) {
        result.push({key: 'town-or-city', errno: 'PI-3013'});
    }

    if (!payload.addressLine1) {
        result.push({key: 'address-line-1', errno: 'PI-3020'});
    }

    if (payload.country === '--') {
        result.push({key: 'country', errno: 'PI-3022'});
    }

    if (!payload.townOrCity) {
        result.push({key: 'town-or-city', errno: 'PI-3023'});
    }

    return result.length > 0 ? result : null;
};

/**
 * Validator for the code page
 * @param payload
 * @param cacheState
 * @returns {Promise<*>}
 */
internals.validateOverseasDetail = async (payload, cacheState) => {
    const transfer = cacheState.tasks.transfers[cacheState.tasks.currentTransferIdx];

    const { value } = payload;
    const result = [];

    if (!isNumeric(value)) {
        result.push({ key: 'value', errno: 'PI-2000' });
    } else {
        const overseasTotal = Object.values(transfer.overseas)
            .map(o => o.value)
            .filter(v => v)
            .reduce((a, c) => a + c, 0);

        if (overseasTotal + Number.parseFloat(payload.value) > transfer.value) {
            result.push({key: 'value', errno: 'PI-2001'});
        }
    }
    return result.length > 0 ? result : null;
};

/**
 * Creates an unvalidated off-site transfer cache object (ids only)
 * @param obj - the page object
 * @return {Promise.<{ewc: {activity: *, chapter: *, subChapter: *}, wfd: {disposal: *, recovery: *}, value}>}
 */
internals.createWasteTransferCacheObject = async (payload) => {

    const { ewc, wfd, value, method, brt } = payload;

    const ewcObj = await internals.ewcFromStr(ewc);
    const { disposal, recovery } = await internals.disposalOrRecoveryFromStr(wfd);
    const ewcActivity = await MasterDataService.getEwcActivityById(ewcObj.activityId);

    const result = {
        ewc: {
            activityId: ewcObj.activityId,
            chapterId: ewcObj.chapterId,
            subChapterId: ewcObj.subChapterId
        },

        wfd: {
            disposalId: disposal ? disposal.id : null,
            recoveryId: recovery ? recovery.id : null
        },

        method: method,
        hazardous: ewcActivity.hazardous
    };

    if (brt === 'true') {
        result.brt = true;
    } else {
        result.value = Number.parseFloat(value);
    }

    return result;
};

/**
 * Function to ensure a consistent cache object for both business and site addresses
 * @param payload
 */
internals.createAddressCacheObject = (payload) => {
    const obj = {};

    if (payload.addressLine1) {
        obj.addressLine1 = payload.addressLine1;
    }

    if (payload.addressLine2) {
        obj.addressLine2 = payload.addressLine2;
    }

    if (payload.businessName) {
        obj.businessName = payload.businessName;
    }

    if (payload.townOrCity) {
        obj.townOrCity = payload.townOrCity;
    }

    if (payload.country) {
        obj.country = payload.country;
    }

    return obj;
};

/**
 * Sort by the cache object. Relies on the id's to sort.
 * @param a
 * @param b
 * @return <number>
 */
internals.sortTransfer = (a, b) => {

    if (a.ewc.chapterId < b.ewc.chapterId) {
        return -1;
    }

    if (a.ewc.chapterId > b.ewc.chapterId) {
        return 1;
    }

    if (a.ewc.subChapterId < b.ewc.subChapterId) {
        return -1;
    }

    if (a.ewc.subChapterId > b.ewc.subChapterId) {
        return 1;
    }

    if (a.ewc.activityId < b.ewc.activityId) {
        return -1;
    }

    if (a.ewc.activityId > b.ewc.activityId) {
        return 1;
    }

    if (a.wfd.disposalId && b.wfd.recoveryId) {
        return -1;
    }

    if (a.wfd.recoveryId && b.wfd.disposalId) {
        return 1;
    }

    if ((a.wfd.disposalId ? a.wfd.disposalId : a.wfd.recoveryId) < (b.wfd.disposalId ? b.wfd.disposalId : b.wfd.recoveryId)) {
        return -1;
    }

    if ((a.wfd.disposalId ? a.wfd.disposalId : a.wfd.recoveryId) > (b.wfd.disposalId ? b.wfd.disposalId : b.wfd.recoveryId)) {
        return 1;
    }

    return 0;
};

class BaseStage {
    constructor ([ viewpath, validator ]) {
        this.path = viewpath;
        this.validator = validator;
    }

    async handler (request, h) {
        try {
            let errors;
            const cacheState = await cacheHelper(request, 'waste');
            if (request.method.toUpperCase() === 'GET') {
                return this.doGet(request, h, cacheState);
            } else {
                if (this.validator) {
                    errors = await this.validator(request.payload, cacheState);
                }
                return this.doPost(request, h, cacheState, errors);
            }
        } catch (err) {
            return errHdlr(err, h);
        }
    }
}

class Codes extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h, cacheState) {
        const tasks = cacheState.tasks;
        if (tasks.currentWasteTransfer) {
            if (tasks.currentWasteTransfer.incomplete) {
                return h.view(this.path, { transfer: tasks.currentWasteTransfer.incomplete });
            }
        }

        return h.view(this.path);
    }

    async doPost (request, h, cacheState, errors) {
        const tasks = cacheState.tasks;
        if (errors) {
            tasks.currentWasteTransfer = {
                incomplete: {
                    errors: errors,
                    page: request.payload
                }
            };
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
            return h.redirect('/transfers/waste/codes');
        } else {
            const cacheObject = await internals.createWasteTransferCacheObject(request.payload);

            delete tasks.currentWasteTransfer;
            tasks.transfers = tasks.transfers || [];
            tasks.transfers.push(cacheObject);

            // We need to address this by the array index so we need a deterministic sort
            tasks.transfers.sort(internals.sortTransfer);

            // Set up the index pointer
            const currentTransferIdx = internals.findTransfer(tasks, cacheObject);
            tasks.currentTransferIdx = currentTransferIdx;

            // Save the task
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);

            // Hazardous waste for recovery can be sent overseas otherwise redirect to the summary page
            if (cacheObject.hazardous && cacheObject.wfd.recoveryId) {
                return h.redirect('/transfers/waste/confirm-overseas');
            } else {
                return h.redirect('/transfers/waste');
            }
        }
    }
}

class ConfirmOverseas extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h) {
        return h.view(this.path, { route: { name: 'OVERSEAS' } });
    }

    async doPost (request, h, cacheState) {
        if (request.payload.confirmation === 'true') {
            const tasks = cacheState.tasks;
            const overseasKey = uuid.v4();
            const transfer = tasks.transfers[tasks.currentTransferIdx];
            transfer.overseas = transfer.overseas || {};
            transfer.overseas[overseasKey] = {};
            transfer.overseas.currentKey = overseasKey;
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
            return h.redirect('/transfers/waste/selectBusinessAddress');
        }

        return h.redirect('/transfers/waste');
    }
}

class SelectBusinessAddress extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h) {
        const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);

        if (userContext.addresses && userContext.addresses.business) {
            return h.view(this.path, {
                path: '/transfers/waste/selectBusinessAddress',
                type: 'BUSINESS',
                addresses: userContext.addresses.business
            });
        } else {
            return h.redirect('/transfers/waste/addBusinessAddress');
        }
    }

    async doPost (request, h, cacheState) {
        if (Object.keys(request.payload).includes('add')) {
            return h.redirect('/transfers/waste/addBusinessAddress');
        } else {
            if (request.payload.address) {
                const tasks = cacheState.tasks;
                const transfer = tasks.transfers[tasks.currentTransferIdx];
                transfer.overseas[transfer.overseas.currentKey].businessAddress = request.payload.address;
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                return h.redirect('/transfers/waste/selectSiteAddress');
            }
            return h.redirect('/transfers/waste/addBusinessAddress');
        }
    }
}

class AddBusinessAddress extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h, cacheState) {
        const tasks = cacheState.tasks;
        const countries = Countries.getNames('en');
        if (tasks.address && tasks.address.incomplete) {
            return h.view(this.path, { type: 'BUSINESS', countries: countries, address: tasks.address.incomplete });
        }

        return h.view(this.path, {
            path: '/transfers/waste/addBusinessAddress',
            type: 'BUSINESS',
            countries: countries });
    }

    async doPost (request, h, cacheState, errors) {
        const tasks = cacheState.tasks;
        if (errors) {
            tasks.address = {
                incomplete: {
                    errors: errors,
                    page: request.payload
                }
            };
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
            return h.redirect('/transfers/waste/addBusinessAddress');
        } else {
            delete tasks.address;
            const addressKey = uuid.v4();
            const transfer = tasks.transfers[tasks.currentTransferIdx];
            transfer.overseas[transfer.overseas.currentKey].businessAddress = addressKey;
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);

            const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
            userContext.addresses = userContext.addresses || {};
            userContext.addresses.business = userContext.addresses.business || {};
            const address = internals.createAddressCacheObject(request.payload);
            userContext.addresses.business[addressKey] = address;
            await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).set(request, userContext);

            return h.redirect('/transfers/waste/selectSiteAddress');
        }
    }
}

class SelectSiteAddress extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h) {
        const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);

        if (userContext.addresses && userContext.addresses.site) {
            return h.view(this.path, {
                path: '/transfers/waste/selectSiteAddress',
                type: 'SITE',
                addresses: userContext.addresses.site
            });
        } else {
            return h.redirect('/transfers/waste/addSiteAddress');
        }
    }

    async doPost (request, h, cacheState) {
        if (Object.keys(request.payload).includes('add')) {
            return h.redirect('/transfers/waste/addSiteAddress');
        } else {
            if (request.payload.address) {
                const tasks = cacheState.tasks;
                const transfer = tasks.transfers[tasks.currentTransferIdx];
                transfer.overseas[transfer.overseas.currentKey].siteAddress = request.payload.address;
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                return h.redirect('/transfers/waste/overseas/detail');
            }
            return h.redirect('/transfers/waste/addSiteAddress');
        }
    }
}

class AddSiteAddress extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h, cacheState) {
        const tasks = cacheState.tasks;
        const countries = Countries.getNames('en');
        if (tasks.address && tasks.address.incomplete) {
            return h.view(this.path, { type: 'SITE', countries: countries, address: tasks.address.incomplete });
        }

        return h.view(this.path, {
            path: '/transfers/waste/addSiteAddress',
            type: 'SITE',
            countries: countries });
    }

    async doPost (request, h, cacheState, errors) {
        const tasks = cacheState.tasks;
        if (errors) {
            tasks.address = {
                incomplete: {
                    errors: errors,
                    page: request.payload
                }
            };
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
            return h.redirect('/transfers/waste/addSiteAddress');
        } else {
            delete tasks.address;
            const addressKey = uuid.v4();
            const transfer = tasks.transfers[tasks.currentTransferIdx];
            transfer.overseas[transfer.overseas.currentKey].siteAddress = addressKey;
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);

            const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
            userContext.addresses = userContext.addresses || {};
            userContext.addresses.site = userContext.addresses.site || {};
            const address = internals.createAddressCacheObject(request.payload);
            userContext.addresses.site[addressKey] = address;
            await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).set(request, userContext);

            return h.redirect('/transfers/waste/overseas/detail');
        }
    }
}

class OverseasDetail extends BaseStage {

    constructor (...args) {
        super(args);
    }

    async doGet (request, h, cacheState) {
        const tasks = cacheState.tasks;
        if (tasks.currentWasteTransfer) {
            if (tasks.currentWasteTransfer.incomplete) {
                return h.view(this.path, { transfer: tasks.currentWasteTransfer.incomplete });
            }
        }

        return h.view(this.path);
    }

    async doPost (request, h, cacheState, errors) {
        const tasks = cacheState.tasks;
        if (errors) {
            tasks.currentWasteTransfer = {
                incomplete: {
                    errors: errors,
                    page: request.payload
                }
            };
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
            return h.redirect('/transfers/waste/overseas/detail');
        } else {
            delete tasks.currentWasteTransfer;
            const transfer = tasks.transfers[tasks.currentTransferIdx];
            transfer.overseas[transfer.overseas.currentKey].value = Number.parseFloat(request.payload.value);
            transfer.overseas[transfer.overseas.currentKey].method = request.payload.method;
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
            return h.redirect('/transfers/waste');
        }
    }
}

internals.code = new Codes('all-sectors/report/waste-codes', internals.validateCode);
internals.confirmOverseas = new ConfirmOverseas('all-sectors/report/confirm');
internals.selectBusinessAddress = new SelectBusinessAddress('all-sectors/report/select-address');
internals.addbusinessAddress = new AddBusinessAddress('all-sectors/report/add-address', internals.validateBusinessAddress);
internals.selectSiteAddress = new SelectSiteAddress('all-sectors/report/select-address');
internals.addSiteAddress = new AddSiteAddress('all-sectors/report/add-address', internals.validateSiteAddress);
internals.overseasDetail = new OverseasDetail('all-sectors/report/overseas-waste-detail', internals.validateOverseasDetail);

module.exports = {
    /**
     * The challenge page handler
     * @param request
     * @param h
     * @return {Promise.<void>}
     */
    confirm: async (request, h) => {
        try {
            const { route, tasks, submissionContext } = await cacheHelper(request, 'waste');

            if (request.method === 'get') {

                // If we have waste transfers then redirect directly to the waste handler summary page
                if (tasks && tasks.transfers && tasks.transfers.length > 0) {
                    return h.redirect('/transfers/waste');
                } else {
                    return h.view('all-sectors/report/confirm', {
                        route: route,
                        selected: false
                    });
                }

            } else {
                // Process the confirmation - set the current route and redirect to the page
                if (request.payload.confirmation === 'true') {
                    await setChallengeStatus(request, submissionContext, route, true);
                    return h.redirect(route.page);
                } else {
                    // If the challenge page results in false then this is a confirmed route
                    await setConfirmation(request, submissionContext, route, true);

                    // Unset the confirmation status when viewing the page
                    await setChallengeStatus(request, submissionContext, route);

                    await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
                    return h.redirect('/task-list');
                }
            }

        } catch (err) {
            return errHdlr(err, h);
        }
    },

    /**
     * Central handler for waste
     * @param request
     * @param h
     * @returns {Promise<void>}
     */
    waste: async (request, h) => {
        try {
            const { submissionContext, route, tasks } = await cacheHelper(request, 'waste');

            if (request.method === 'get') {
                if (!tasks.transfers || tasks.transfers.length === 0) {
                    if (tasks.currentWasteTransfer) {
                        delete tasks.currentWasteTransfer;
                        await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    }
                    return h.redirect('/transfers/waste/codes');
                } else {
                    // Enrich the waste objects from the master data
                    const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
                    const transfers = await Promise.all(tasks.transfers.map(async t => {
                        return internals.enrichWasteTransferObject(userContext, t);
                    }));

                    // Unset the confirmation status when viewing the page
                    await setConfirmation(request, submissionContext, route);
                    return h.view('all-sectors/report/waste', { transfers: transfers });
                }

            } else {
                if (request.payload.add) {
                    // Add another transfer
                    delete tasks.currentWasteTransfer;
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/transfers/waste/codes');

                } else if (Object.keys(request.payload).find(k => k.startsWith('delete'))) {
                    // Delete transfer
                    const transferKey = Object.keys(request.payload).find(k => k.startsWith('delete')).replace('delete-', '');
                    const currentTransferIdx = internals.findTransferFromPayloadString(tasks, transferKey);
                    tasks.currentTransferIdx = currentTransferIdx;
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/transfers/waste/remove');

                } else if (Object.keys(request.payload).find(k => k.startsWith('overseas-add'))) {
                    // Add (more) overseas transfers
                    const transferKey = Object.keys(request.payload).find(k => k.startsWith('overseas-add')).replace('overseas-add-', '');
                    const currentTransferIdx = internals.findTransferFromPayloadString(tasks, transferKey);
                    tasks.currentTransferIdx = currentTransferIdx;
                    const overseasKey = uuid.v4();
                    const transfer = tasks.transfers[tasks.currentTransferIdx];
                    transfer.overseas = transfer.overseas || {};
                    transfer.overseas[overseasKey] = {};
                    transfer.overseas.currentKey = overseasKey;
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/transfers/waste/selectBusinessAddress');

                } else if (Object.keys(request.payload).find(k => k.startsWith('overseas-delete'))) {
                    const compoundKey = Object.keys(request.payload).find(k => k.startsWith('overseas-delete')).replace('overseas-delete-', '');
                    const currentTransferIdx = internals.findTransferFromPayloadString(tasks, compoundKey.split('::')[0]);
                    tasks.currentTransferIdx = currentTransferIdx;
                    const transfer = tasks.transfers[tasks.currentTransferIdx];
                    transfer.overseas.currentKey = compoundKey.split('::')[1];
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/transfers/waste/overseas/remove');

                } else if (request.payload.continue) {
                    // Confirm
                    await setConfirmation(request, submissionContext, route, true);
                    await setValidationStatus(request, submissionContext, route, true);
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/task-list');

                }
            }

        } catch (err) {
            return errHdlr(err, h);
        }
    },

    /**
     * Dialog to remove waste transfer
     * @param request
     * @param h
     * @returns {Promise<*>}
     */
    remove: async (request, h) => {
        try {
            const { submissionContext, route, tasks } = await cacheHelper(request, 'waste');

            if (request.method === 'get') {
                return h.view('all-sectors/report/confirm-delete', {
                    route: route,
                    transfer: await internals.enrichWasteTransferObject(
                        await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request),
                        tasks.transfers[tasks.currentTransferIdx])
                });
            } else {
                tasks.transfers.splice(tasks.currentTransferIdx, 1);
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);

                if (tasks.transfers.length > 0) {
                    return h.redirect('/transfers/waste');
                } else {
                    // Here we unset the challenge flag - the user must explicitly say no to the route
                    await setChallengeStatus(request, submissionContext, route);
                    return h.redirect('/task-list');
                }
            }
        } catch (err) {
            return errHdlr(err, h);
        }
    },

    overseasRemove: async (request, h) => {
        try {
            const { tasks } = await cacheHelper(request, 'waste');
            const currentTransfer = tasks.transfers[tasks.currentTransferIdx];
            const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
            const transfer = await internals.enrichWasteTransferObject(userContext, currentTransfer);
            const currentOverseas = transfer.overseas[currentTransfer.overseas.currentKey];

            if (request.method === 'get') {
                return h.view('all-sectors/report/confirm-delete', {
                    route: { name: 'WASTE_TRANSFERS_OVERSEAS' },
                    overseas: currentOverseas
                });
            } else {
                delete currentTransfer.overseas[currentTransfer.overseas.currentKey];
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                return h.redirect('/transfers/waste');
            }
        } catch (err) {
            return errHdlr(err, h);
        }
    },

    /**
     * Handler to deal with waste codes
     * @param request
     * @param h
     * @returns {Promise<*>}
     */
    codes: async (request, h) => {
        return internals.code.handler(request, h);
    },

    confirmOverseas: async (request, h) => {
        return internals.confirmOverseas.handler(request, h);
    },

    selectBusinessAddress: async (request, h) => {
        return internals.selectBusinessAddress.handler(request, h);
    },

    addBusinessAddress: async (request, h) => {
        return internals.addbusinessAddress.handler(request, h);
    },

    selectSiteAddress: async (request, h) => {
        return internals.selectSiteAddress.handler(request, h);
    },

    addSiteAddress: async (request, h) => {
        return internals.addSiteAddress.handler(request, h);
    },

    overseasDetail: async (request, h) => {
        return internals.overseasDetail.handler(request, h);
    }
};
