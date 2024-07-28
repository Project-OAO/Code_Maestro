/*
[설계]

<입력>
문장 - 단어와 띄어쓰기로 이루어짐

<출력>
단어의 수를 출력

<로직>
양옆을 trim하고 공백의 수를 센다.
*/

// solve
const solve = (input) => {
  const answer = input.trim().split(' ').reduce((acc, cur) => {
    if (cur !== '') return acc + 1;
    return acc;
  }, 0);
  console.log(answer);
  return answer;
};

// 입력처리
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;

rl.on('line', line => {
  input = line.trim();
  rl.close();
}).on('close', () => {
  solve(input);
});