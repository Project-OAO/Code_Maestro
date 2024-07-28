/*
[설계]
<입력>
두 정수

<출력>
큰 수

<로직>
뒤집어서 큰 수 비교
*/

const reverseStr = (str) => {
  const tmp = str.trim().split('').reverse().join('');
  return tmp;
};

const solve = (str) => {
  const [num1, num2] = str.trim().split(' ');

  const reversedNum1 = reverseStr(num1);
  const reversedNum2 = reverseStr(num2);

  const answer = reversedNum1 > reversedNum2 ? reversedNum1 : reversedNum2;
  console.log(answer);
  return answer;
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', line => {
  input = line;
}).on('close', () => {
  solve(input);
});