const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

// const input = `3
// 1
// 4
// 5
// 7
// 9
// 6
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// `.toString().trim().split('\n').map(Number);

const arr = Array.from({length: 31}, () => 0);

input.forEach(v => {
  arr[v] = v;
});

arr.slice(1).forEach((v, i) => {
  if (v === 0) console.log(i + 1);
});