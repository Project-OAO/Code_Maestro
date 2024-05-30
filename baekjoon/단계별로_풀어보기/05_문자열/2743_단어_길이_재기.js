/*
[설계]
  <입력>
  알파벳으로만 이루어진 단어

  <출력>
  단어의 길이

  <로직>
  자바스크립트는 문자열에서 .length 메서드를 지원한다. 길이를 리턴하자.
*/

// 문제 해결 함수
const solution = (word) => {
  console.log(word.length);
  return word.length;
};

// 입력받기
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
  rl.close();
}).on('close', () => {
  solution(input[0]);
});