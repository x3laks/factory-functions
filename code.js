const isTabInView = () => !document.hidden;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;