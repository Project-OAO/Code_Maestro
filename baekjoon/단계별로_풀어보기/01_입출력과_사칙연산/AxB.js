const fs = require('fs');

const [A, B] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => Number(v));

console.log(A * B);