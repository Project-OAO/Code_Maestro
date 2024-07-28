const fs = require('fs');

const year = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

let result = 0;

if (year % 4 === 0 && year % 100 !== 0) result = 1;
if (year % 400 === 0) result = 1;

console.log(result);