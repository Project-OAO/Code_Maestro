// 입력을 읽어오는 경로가 /dev/stdin 아니면 0으로 표기하는 듯... 어이가 없다...

const fs = require('fs');

const [input1, input2] = fs.readFileSync('0').toString().split('\n').map(v => Number(v));

let result = 1;
if (input1 > 0) {
  if (input2 < 0) result = 4;
} else if (input2 > 0) result = 2;
else result = 3;

console.log(result);