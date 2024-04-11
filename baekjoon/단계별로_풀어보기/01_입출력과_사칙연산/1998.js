const fs = require('fs');

const inputData = parseInt(fs.readFileSync('/dev/stdin').toString(), 10);

console.log(inputData + 543);