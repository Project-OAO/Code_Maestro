// 빈도수 세기 문제

const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ');

let count = 0;

arr.forEach(v => {
  if (v === input[2]) count += 1;
});

console.log(count);