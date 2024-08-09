const resultingPromises = urls.map((url) => makHttpRequest(url));
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;