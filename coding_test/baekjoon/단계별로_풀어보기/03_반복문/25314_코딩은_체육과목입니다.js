const fs = require('fs');

const input = Number(fs.readFileSync(0).toString().trim());

const howManyLong = Math.floor(input / 4);

let answer = 'int';

for (let i = 0; i < howManyLong; i += 1) {
  answer = `long ${answer}`;
}

console.log(answer);