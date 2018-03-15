'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');

const MasterDataService = require('../../src/service/master-data');
const createOffSiteTransferCacheObject = require('../../src/handlers/all-sectors/report/off-site').createOffSiteTransferCacheObject;
const sortOffSiteTransfer = require('../../src/handlers/all-sectors/report/off-site').sortOffSiteTransfer;
const enrichOffSiteTransferObject = require('../../src/handlers/all-sectors/report/off-site').enrichOffSiteTransferObject;

// const getCookies = require('./common').getCookies;

const experiment = lab.experiment;
const expect = Code.expect;
const test = lab.test;

// const server = require('../../src/lib/server');

experiment('Off-site transfers - unit tests', async () => {
    test('Valid ewc strings', async () => {
        const expObj = await MasterDataService.getEwc('01', '04', '07');
        let to = await createOffSiteTransferCacheObject({ ewc: '01 04 07', wfd: null, value: null });
        expect(to.ewc).to.be.not.null();
        expect(to.ewc).to.equal(expObj);

        to = await createOffSiteTransferCacheObject({ ewc: '01.04.07', wfd: null, value: null });
        expect(to.ewc).to.be.not.null();
        expect(to.ewc).to.equal(expObj);

        to = await createOffSiteTransferCacheObject({ ewc: ' 01  04  07 ', wfd: null, value: null });
        expect(to.ewc).to.be.not.null();
        expect(to.ewc).to.equal(expObj);

        to = await createOffSiteTransferCacheObject({ ewc: '010407', wfd: null, value: null });
        expect(to.ewc).to.be.not.null();
        expect(to.ewc).to.equal(expObj);

        to = await createOffSiteTransferCacheObject({ ewc: '01-04-07', wfd: null, value: null });
        expect(to.ewc).to.be.not.null();
        expect(to.ewc).to.equal(expObj);
    });

    test('Invalid ewc strings', async () => {
        let to = await createOffSiteTransferCacheObject({ ewc: '01 03', wfd: null, value: null });
        expect(to.ewc).to.be.null();

        to = await createOffSiteTransferCacheObject({ ewc: '01/03/07', wfd: null, value: null });
        expect(to.ewc).to.be.null();

        to = await createOffSiteTransferCacheObject({ ewc: '99 11 12', wfd: null, value: null });
        expect(to.ewc).to.be.null();

        to = await createOffSiteTransferCacheObject({ ewc: 'Good morning!', wfd: null, value: null });
        expect(to.ewc).to.be.null();
    });

    test('Valid wfd strings', async () => {
        const rec = await MasterDataService.getRecoveryCode('R1');
        const dis = await MasterDataService.getDisposalCode('D1');

        let to = await createOffSiteTransferCacheObject({ ewc: null, wfd: 'R1', value: null });
        expect(to.wfd.recoveryId).to.equal(rec.id);
        expect(to.wfd.disposalId).to.be.null();

        to = await createOffSiteTransferCacheObject({ ewc: null, wfd: 'D1', value: null });
        expect(to.wfd.disposalId).to.equal(dis.id);
        expect(to.wfd.recoveryId).to.be.null();
    });

    test('Invalid wfd strings', async () => {
        const to = await createOffSiteTransferCacheObject({ ewc: null, wfd: 'Good morning!', value: null });
        expect(to.wfd).to.be.null();
    });

    test('Valid value', async () => {
        const to = await createOffSiteTransferCacheObject({ ewc: null, wfd: null, value: '14' });
        expect(to.value).to.equal(14);
    });

    test('Invalid value', async () => {
        const to = await createOffSiteTransferCacheObject({ ewc: null, wfd: null, value: 'egg' });
        expect(to.value).to.equal('egg');
    });

    test('Off-site transfer object enrichment 1', async () => {
        const expObj = await MasterDataService.getEwc('01', '03', '07');
        const rec = await MasterDataService.getRecoveryCode('R1');

        const to = await createOffSiteTransferCacheObject({ ewc: '01 03 07', wfd: 'R1', value: '898' });
        const co = await enrichOffSiteTransferObject(to);
        expect(co.ewc.activity.id).to.equal(expObj.activityId);
        expect(co.ewc.chapter.id).to.equal(expObj.chapterId);
        expect(co.ewc.subChapter.id).to.equal(expObj.subChapterId);

        expect(co.wfd.recovery.id).to.equal(rec.id);
        expect(co.wfd.disposal).to.be.null();
        expect(co.value).to.equal(898);
    });

    test('Off-site transfer object enrichment 2', async () => {
        const expObj = await MasterDataService.getEwc('01', '03', '07');
        const rec = await MasterDataService.getRecoveryCode('R1');

        const to = await createOffSiteTransferCacheObject({ ewc: '01 03 07', wfd: 'D1', value: '898' });
        const co = await enrichOffSiteTransferObject(to);
        expect(co.ewc.activity.id).to.equal(expObj.activityId);
        expect(co.ewc.chapter.id).to.equal(expObj.chapterId);
        expect(co.ewc.subChapter.id).to.equal(expObj.subChapterId);

        expect(co.wfd.disposal.id).to.equal(rec.id);
        expect(co.wfd.recovery).to.be.null();
        expect(co.value).to.equal(898);
    });

    test('Off-site transfer object sort', async () => {

        const start = [
            await createOffSiteTransferCacheObject({ ewc: '01 03 07', wfd: 'R1', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '04 02 10', wfd: 'R2', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '01 03 05', wfd: 'R1', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '02 02 02', wfd: 'R2', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '01 03 06', wfd: 'D2', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '02 03 04', wfd: 'D1', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '04 02 14', wfd: 'R2', value: '898' })
        ];

        const sorted = [
            await createOffSiteTransferCacheObject({ ewc: '01 03 05', wfd: 'R1', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '01 03 06', wfd: 'D2', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '01 03 07', wfd: 'R1', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '02 02 02', wfd: 'R2', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '02 03 04', wfd: 'D1', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '04 02 10', wfd: 'R2', value: '898' }),
            await createOffSiteTransferCacheObject({ ewc: '04 02 14', wfd: 'R2', value: '898' })
        ];

        start.sort(sortOffSiteTransfer);

        expect(sorted).to.equal(start);
    });

});
