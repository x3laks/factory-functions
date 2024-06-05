const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const goToTop = () => window.scrollTo(0, 0);