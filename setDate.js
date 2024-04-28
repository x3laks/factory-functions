const isEmptyObject = obj => Object.keys(obj).length === 0;
const repositoryRootPath = path.resolve(__dirname, '..');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));