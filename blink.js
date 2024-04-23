const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const channel = getChannel(computedAppVersion);