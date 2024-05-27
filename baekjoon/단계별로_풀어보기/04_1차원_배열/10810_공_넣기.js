const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const arrSize = Number(input[0].split(' ')[0]);
const arr = Array.from({length: arrSize}, () => 0);

const targetList = input.slice(1);

targetList.forEach(v => {
  const [start, end, value] = v.split(' ').map(Number);

  for (let i = start - 1; i < end; i++) {
    arr[i] = value;
  }
});

console.log(arr.join(' '));
