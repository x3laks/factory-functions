const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const merge = [...new Set([...a, ...b])];