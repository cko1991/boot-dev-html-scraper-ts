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