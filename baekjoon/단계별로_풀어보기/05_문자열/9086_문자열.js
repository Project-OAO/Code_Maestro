/*
[설계]
  <입력>
    문자열
   <출력>
    문자열의 첫 글자와 마지막글자를 붙여서 출력

   <로직>
    자바스크립트는 기본적으로 문자열 인덱싱을 지원한다. 그리고 at을 쓰면 -1의 인덱스도 받을 수 있음을 기억하자.
*/

// solution
const solution = (input) => {
  const result = input[0] + input.at(-1);
  console.log(result);
  return result;
};

// 입력받기
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  for (let i = 1; i < input.length; i++) {
    solution(input[i]);
  }
});