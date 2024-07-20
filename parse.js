const result = await makeHttpRequest(url);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);