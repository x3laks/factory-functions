const appName = getAppName(channel);
const uniqueArr = (arr) => [...new Set(arr)];
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);