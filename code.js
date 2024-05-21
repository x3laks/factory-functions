console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const average = arr => arr.reduce((a, b) => a + b) / arr.length;