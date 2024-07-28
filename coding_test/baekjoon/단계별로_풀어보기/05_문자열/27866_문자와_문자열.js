/*
[설계]
  입력 : 단어 S와 정수 i (개행 문자로 구분)
  출력 : S의 i번째 글자 출력

  <로직>
    자바스크립트에서 문자열은 인덱싱을 지원한다. 이에 따라서, 문자열[i]를 출력해주면 된다.
*/

// 솔루션 함수
const solution = (input) => {
  const [str, loc] = input; // 분할 대입 연산자를 통해서 변환
  
  return str[loc - 1];
};

// 입력받기

// 입력을 위한 readline 프로세스 오픈
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력을 처리하기 위해 데이터 저장
const input = [];

rl.on('line', (line) => {
  input.push(line);
  if (input.length >= 2) rl.close();
}).on('close', () => {
  console.log(solution(input));
  process.exit(); // 프로세스 종료
});



