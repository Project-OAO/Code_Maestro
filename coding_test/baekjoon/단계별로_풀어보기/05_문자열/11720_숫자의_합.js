/*
[설계]

  <입력>
    문자열 - 첫줄에는 입력값의 크기, 둘째 줄에는 입력값

  <출력>
    숫자 - 입력값의 합

  <로직>
    처음에 문자열을 받아서 split('\n');을 사용해서 한 줄씩 분해한다.
    두번째 줄에 들어온 문자열을 split('');를 이용해서 분해한다.

    배열로 나올테니, 이들을 reduce를 이용해서 더한후 그 값을 console에 찍는다.
*/

// 정답 함수
const solve = (input) => {
  const target = input[1];

  console.log(target.split('').reduce((acc, cur) => Number(acc) + Number(cur)));
};

// 입력값 처리
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  solve(input);
});