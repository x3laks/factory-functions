const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);