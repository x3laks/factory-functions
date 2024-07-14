const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';