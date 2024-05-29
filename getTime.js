const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const executableName = getExecutableName(channel, appName);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);