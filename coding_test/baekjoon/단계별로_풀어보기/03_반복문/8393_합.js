const fs = require('fs');

const n = parseInt(fs.readFileSync(0).toString(), 10);

let sum = 0;

for (let i = 1; i <= n; i += 1) {
  sum += i;
}

console.log(sum);