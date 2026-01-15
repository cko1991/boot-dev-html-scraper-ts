import { JSDOM } from "jsdom";

export function normalizeURL(url : string) : string
{
    const urlObj = new URL(url);
    let normalizedUrl = `${urlObj.hostname}${urlObj.pathname}`;
    if (normalizedUrl.endsWith('/')) {
        normalizedUrl = normalizedUrl.slice(0, -1);
    }
    normalizedUrl = normalizedUrl.trim();
    return normalizedUrl.toLowerCase();
}

export function getH1FromHTML(html : string) : string
{
    const dom = new JSDOM(html);
    const h1s = dom.window.document.querySelectorAll('h1');
    if (h1s.length === 0) {
        return '';
    }

    return h1s[0].
}