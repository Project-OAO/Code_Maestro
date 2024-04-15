const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');
const cookTime = parseInt(input[1], 10);
let [hour, min] = input[0].split(' ').map(v => parseInt(v, 10));

const tmp = min + cookTime;

hour += Math.floor(tmp / 60);
min = tmp % 60;

if (hour >= 24) hour -= 24;

console.log(`${hour} ${min}`);