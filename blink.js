const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const lastElement = arr => arr[arr.length - 1];
const repositoryRootPath = path.resolve(__dirname, '..');
const isWeekday = (date) => date.getDay() % 6 !== 0;