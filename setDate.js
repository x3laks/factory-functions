const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const resultingPromises = urls.map((url) => makHttpRequest(url));