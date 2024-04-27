const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isArray = (arr) => Array.isArray(arr);