const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let index = 0;

const findMax = (arr) => arr.reduce((acc, cur, i) => {
  if (acc < cur) {
    index = i;
    return cur;
  }

  return acc;
});

const max = findMax(input);

console.log(`${max}\n${index + 1}`);