const fs = require('fs');

const input = fs.readFileSync(0).toString().split('\n');

const count = parseInt(input[0], 10);

for (let i = 1; i <= count; i++) {
  const data = input[i].trim().split(' ');
  console.log(`Case #${i}: ${data[0]} + ${data[1]} = ${parseInt(data[0], 10) + parseInt(data[1], 10)}`);
}