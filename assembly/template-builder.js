'use strict';

/**
 * Copy the government templates from the node_modules into the layouts
 * and precompile them using nunjucks
 */
const fs = require('fs-extra');
const path = require('path');

const logging = require('../src/lib/logging');
const rootPath = path.resolve(__dirname, '../');
const targetPath = path.join(rootPath, '/web/templates/govuk');
const govukTemplateSourcePath = path.join(rootPath, '/node_modules/govuk_template_jinja/views/layouts/govuk_template.html');
const govukTemplateTargetPath = path.join(targetPath, 'govuk_template.html');

module.exports = {
    build: async function () {
        try {
            logging.logger.info('Building gov.uk templates');
            fs.emptyDirSync(targetPath);
            fs.copySync(govukTemplateSourcePath, govukTemplateTargetPath);
            // TODO Consider precompilation There is also an API if you want to programmatically precompile templates.
            // You'll want to do this if you use extensions or you use asynchronous filters, both of which need to
            // be known at compile-time.
            // nunjucks.precompile(govukTemplateTargetPath);
        } catch (err) {
            logging.logger.log('error', `Error building gov.uk templates: ${err}`);
            process.exit(1);
        }
    }
};
