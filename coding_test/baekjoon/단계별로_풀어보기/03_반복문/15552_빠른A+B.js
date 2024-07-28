const fs = require('fs');

const [count, ...input] = fs.readFileSync(0).toString().split('\n');

const result = [];

for (let i = 0; i < count; i++) {
  const data = input[i].split(' ').map(v => parseInt(v, 10));
  result.push(data[0] + data[1]);
}

console.log(result.join('\n'));