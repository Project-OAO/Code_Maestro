const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const freq = {};

input.forEach(v => {
  const tmp = v % 42;

  if (!freq.tmp) {
    freq[tmp] = 1;
  } else {
    freq[tmp] += 1;
  }
});

const count = Object.keys(freq).length;

console.log(count);