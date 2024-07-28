const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

// const input = `10 5
// 1 10 4 9 2 3 8 5 7 6`.toString().trim().split('\n');

const target = Number(input[0].split(' ')[1]);

const arr = input[1].split(' ').map(Number);

const answer = [];

arr.forEach(v => {
  if (v < target) answer.push(v);
});

console.log(answer.join(' '));