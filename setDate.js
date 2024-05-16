var DELIM_SIZE = 4;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const timeFromDate = date => date.toTimeString().slice(0, 8);