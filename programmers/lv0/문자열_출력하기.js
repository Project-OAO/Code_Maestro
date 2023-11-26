// Lim, Jaedo a.k.a. OAO
// 26NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 문자열 출력하기 -> 굉장히 쉬운 문제
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', line => {
  input = [line];
}).on('close', () => {
  str = input[0];
  console.log(str);
});
