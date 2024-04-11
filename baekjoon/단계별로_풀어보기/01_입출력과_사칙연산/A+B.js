// node js의 입출력을 알아야 풀 수 있는 문제
const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(parseInt(inputData[0], 10) + parseInt(inputData[1], 10));