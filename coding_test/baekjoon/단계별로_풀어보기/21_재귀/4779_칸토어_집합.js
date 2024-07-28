const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').map(v => Number(v));

const makeArr = (n) => {
  if (n === 0) return '-';
  const blank = ' '.repeat(3 ** (n - 1));
  return makeArr(n - 1) + blank + makeArr(n - 1);
};

input.forEach(v => console.log(makeArr(v)));
