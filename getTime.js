console.log("0 && 1 = "+(0 && 1));
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;