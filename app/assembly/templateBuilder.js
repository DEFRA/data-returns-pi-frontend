'use strict';

/**
 * Reads the government templates from the node_modules and processes them into /tmp
 */
const fs = require('fs-extra');
const path = require('path');
const rootPath = path.resolve(__dirname, '../../');
const govukTemplateSourcePath = `${rootPath}/node_modules/govuk_template_mustache/views/layouts/govuk_template.html`;
const targetPath = `${rootPath}/tmp/templates`;
const govukTemplateTargetPath = `${targetPath}/govuk_template.html`;
const nunjucks = require('nunjucks');

const system = require('../lib/system.js');

const templateConfig = {
    assetPath: '{{assetPath}}',
    afterHeader: '{{$afterHeader}}{{/afterHeader}}',
    bodyClasses: '{{$bodyClasses}}{{/bodyClasses}}',
    bodyStart: '{{$bodyStart}}{{/bodyStart}}',
    bodyEnd: '{{$bodyEnd}}{{/bodyEnd}}',
    content: '{{$content}}{{/content}}',
    cookieMessage: '{{$cookieMessage}}{{/cookieMessage}}',
    crownCopyrightMessage: '{{$crownCopyrightMessage}}{{/crownCopyrightMessage}}',
    footerSupportLinks: '{{$footerSupportLinks}}{{/footerSupportLinks}}',
    footerTop: '{{$footerTop}}{{/footerTop}}',
    globalHeaderText: '{{$globalHeaderText}}GOV.UK{{/globalHeaderText}}',
    head: '{{$head}}{{/head}}',
    headerClass: '{{$headerClass}}{{/headerClass}}',
    homepageUrl: '{{$homepageUrl}}https://www.gov.uk{{/homepageUrl}}',
    htmlLang: '{{$htmlLang}}{{/htmlLang}}',
    insideHeader: '{{$insideHeader}}{{/insideHeader}}',
    licenceMessage: '{{$licenceMessage}}{{/licenceMessage}}',
    pageTitle: '{{$pageTitle}}GOV.UK - The best place to find government services and information{{/pageTitle}}',
    propositionHeader: '{{$propositionHeader}}{{/propositionHeader}}',
    skipLinkMessage: '{{$skipLinkMessage}}Skip to main content{{/skipLinkMessage}}',
    topOfPage: '{{$topOfPage}}{{/topOfPage}}'
};

module.exports = {
    build: async function () {
        try {
            system.logger.info('Building gov.uk templates');
            fs.emptyDirSync(targetPath);
            await fs.copy(govukTemplateSourcePath, govukTemplateTargetPath);
            nunjucks.precompile(govukTemplateTargetPath);
        } catch (err) {
            system.logger.log('error', `Error building gov.uk templates: ${err}`);
            process.exit(1);
        }

        // const govukTemplate = fs.readFileSync(govukTemplateSourcePath, { encoding: 'utf-8' });
        // const compiledTemplate = nunjucks.precompile(govukTemplate);
        // console.log(compiledTemplate);
        // const rendered = nunjucks.render(compiledTemplate, templateConfig);
        // fs.writeFileSync(govukTemplateTargetPath, nunjucks.render(compiledTemplate, templateConfig), { encoding: 'utf-8' });
        // fs.writeFileSync(govukTemplateTargetPath, compiledTemplate.render(templateConfig), { encoding: 'utf-8' });
    },
    GOV_UK_TEMPLATE_PATH: targetPath
};
