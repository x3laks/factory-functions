const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const results = await Promise.all(resultingPromises);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));