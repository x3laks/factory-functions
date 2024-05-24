const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const randomString = () => Math.random().toString(36).slice(2);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;