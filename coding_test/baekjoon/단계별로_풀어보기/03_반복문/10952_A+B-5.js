const fs = require('fs');

const input = fs.readFileSync(0).toString().split('\n');

let sum;
let index = 0;

while (true) {
  const data = input[index].split(' ').map(v => parseInt(v, 10));
  sum = data[0] + data[1];

  if (!sum) break;
  console.log(sum);

  index++;
}