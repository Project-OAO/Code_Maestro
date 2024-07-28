const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const arrSize = Number(input[0].split(' ')[0]) + 1;

const arr = Array.from({length: arrSize}, (v, i) => i);

input.slice(1).forEach(v => {
  const [a, b] = v.split(' ').map(Number);
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
});

console.log(arr.slice(1).join(' '));