'use strict';

/**
 * Copy the government templates from the node_modules into /tmp
 * and precompile them using nunjucks
 */
const fs = require('fs-extra');
const path = require('path');
const rootPath = path.resolve(__dirname, '../../');
const govukTemplateSourcePath = `${rootPath}/node_modules/govuk_template_jinja/views/layouts/govuk_template.html`;
const targetPath = `${rootPath}/tmp/templates`;
const govukTemplateTargetPath = `${targetPath}/govuk_template.html`;
const nunjucks = require('nunjucks');

const system = require('../lib/system.js');

module.exports = {
    build: async function () {
        try {
            system.logger.info('Building gov.uk templates');
            fs.emptyDirSync(targetPath);
            fs.copySync(govukTemplateSourcePath, govukTemplateTargetPath);
            const compiledTemplate = nunjucks.precompile(govukTemplateTargetPath);
            fs.writeFileSync(govukTemplateTargetPath, nunjucks.render(compiledTemplate, templateConfig), { encoding: 'utf-8' });
        } catch (err) {
            system.logger.log('error', `Error building gov.uk templates: ${err}`);
            process.exit(1);
        }
    },
    GOV_UK_TEMPLATE_PATH: targetPath
};
