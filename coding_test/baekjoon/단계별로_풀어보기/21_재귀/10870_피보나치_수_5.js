const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

function fibonacci(number) {
  if (number <= 0) return 0;
  if (number === 1) return 1;
  if (number === 2) return 1;

  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(input));