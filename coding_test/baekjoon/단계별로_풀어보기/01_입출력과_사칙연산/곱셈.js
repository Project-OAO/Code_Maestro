const fs = require('fs');

const [A, B] = fs.readFileSync('/dev/stdin').toString().split('\n').map((v) => Number(v));

const a = B % 10;
const b = (B % 100 - a) / 10;
const c = (B - B % 100) / 100;

console.log(A * a);
console.log(A * b);
console.log(A * c);
console.log(A * B);