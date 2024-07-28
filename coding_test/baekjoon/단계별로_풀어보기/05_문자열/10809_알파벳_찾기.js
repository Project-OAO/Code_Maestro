/*
[설계]
  <입력>
  문자열

  <출력>
  문자열 - 숫자를 ' '로 이은 문자열

  <설계>
  객체를 선언한다.
    객체는 각각의 알파벳에 대해서 -1로 초기화되어있다.
  Object.entries를 이용해서 키-값쌍을 받아오고, 이를 0번 인덱스를 바탕으로 sort를 통해서 정렬한 다음, 정렬한 키에 대해서 값을 하나의 문자열로 이어서 출력한다.
  이유는 자바스크립트에서 Object.keys나 Object.values 등은 순서가 랜덤으로 나오기 때문에 반드시 순서대로 나온다고 보장할 수 없기 때문이다.
*/

// 정답 함수
const solve = (str) => {
  // 빈도수 셀 객체 생성
  const OBJ = {};

  const ASCII = 97;
  for (let i = 0; i < 26; i++) {
    OBJ[String.fromCharCode(ASCII + i)] = -1;
  }

  // str의 인덱스 저장
  str.split('').forEach((v, i) => {
    if (OBJ[v] === -1) OBJ[v] = i;
  });

  // 출력
  const mapped = Object.entries(OBJ).sort((a, b) => a[0] < b[0] ? -1 : 1).map(v => v[1]);
  console.log(mapped.join(' '));
};

// 입력 처리
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  solve(line.trim());
});