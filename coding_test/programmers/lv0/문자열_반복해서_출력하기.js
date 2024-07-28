// Lim, Jaedo a.k.a. OAO
// 12NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// repeat를 사용하면 굉장히 쉽게 처리가 가능하다.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', line => {
  input = line.split(' ');
}).on('close', () => {
  str = input[0];
  n = Number(input[1]);

  console.log(str.repeat(n));
});
