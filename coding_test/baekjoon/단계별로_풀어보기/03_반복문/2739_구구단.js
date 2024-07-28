const fs = require('fs');

const input = parseInt(fs.readFileSync(0).toString().trim(), 10);

for (let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}