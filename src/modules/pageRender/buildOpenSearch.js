import loc from "../../localization/manager.js";

export default function (lang) {
    const t = (str, replace) => { return loc(lang, str, replace) };

    const strippedURL = process.env.webURL.replace(/^https?:\/\//, '').replace(/\/$/, '');

    try {
        return `
            <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/" xmlns:moz="http://www.mozilla.org/2006/browser/search/">
                <ShortName>${t('AppTitleCobalt')}</ShortName>
                <Description>${t("AboutSummary")}</Description>
                <Url type="text/html" method="get" template="${process.env.webURL}?opensearchquery={searchTerms}" />
                <Image height="48" width="48" type="image/x-icon">${process.env.webURL}icons/favicon.ico</Image>
                <Tags>cobalt download</Tags>
            </OpenSearchDescription>
        `
    } catch (err) {
        return '<!-- failed to generate OpenSearch xml -->';
    }
}