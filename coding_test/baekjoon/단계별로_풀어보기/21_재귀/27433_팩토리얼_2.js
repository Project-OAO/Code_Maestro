const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

function factorial(val) {
  if (val < 1) return 1;
  return val * factorial(val - 1);
}

console.log(factorial(input));