const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);  // 첫 번째 줄에서 배열의 길이를 가져옵니다.
const scoreArr = input[1].split(' ').map(Number);

const max = Math.max(...scoreArr);

const sum = scoreArr.reduce((acc, cur) => acc + cur, 0);

// 배열의 길이 n으로 나누어 결과를 계산합니다.
const result = (sum / max * 100) / n;

console.log(result);