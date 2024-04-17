const fs = require('fs');

const [total, kinds, ...stuff] = fs.readFileSync(0).toString().split('\n');

let sum = 0;

for (let i = 0; i < parseInt(kinds, 10); i += 1) {
  const data = stuff[i].split(' ');
  const tmp = parseInt(data[0], 10) * parseInt(data[1], 10);
  sum += tmp;
}

if (sum === parseInt(total, 10)) {
  console.log('Yes');
} else {
  console.log('No');
}