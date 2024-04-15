const fs = require('fs');

const [dice1, dice2, dice3] = fs.readFileSync(0).toString().split(' ').map(v => parseInt(v, 10));

let result = Math.max(dice1, dice2, dice3) * 100;

if (dice1 === dice2) {
  if (dice1 === dice3) result = 10000 + dice1 * 1000;
  else result = 1000 + dice1 * 100;
} else if (dice1 === dice3 || dice2 === dice3) result = 1000 + dice3 * 100;

console.log(result);