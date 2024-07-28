const fs = require('fs');

const [A, B] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => Number(v));

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Number(A / B));
console.log(A % B);