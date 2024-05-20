const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const result = input.map((v) => {
  const [num1, num2] = v.split(' ').map(Number);
  return num1 + num2;
});

result.forEach(v => console.log(v));