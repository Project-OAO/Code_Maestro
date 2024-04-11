const fs = require('fs');

const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => Number(v));

console.log(A + B + C);