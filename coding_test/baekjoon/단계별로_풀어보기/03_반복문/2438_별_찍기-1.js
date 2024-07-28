const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

for (let i = 1; i <= input; i++) {
  let data = '';
  for (let j = 0; j < i; j++) {
    data += '*';
  }

  console.log(`${data}`);
}