/*
[설계]
<입력>
알파벳 대문자로 이루어진 단어

<출력>
정수 : 이동거리수

<로직>
입력을 ''을 기준으로 분해해서 각 문자별로 본다.

쉽게 풀자. 문자에 해당하는 객체를 만들고 이에 해당하는 값을 대입하게 하자.
*/

const charOBJ = {
  '*': 11,
  '#': 11,
};

const addCharOBJ = () => {
  const ASCII = 65;
  let loc = 3;

  for (let i = 0, j = 0; i < 18; i++, j++) {
    const char = String.fromCharCode(ASCII + i);

    if (j >= 3) {
      loc++;
      j = 0;
    }

    charOBJ[char] = loc;
  }

  charOBJ.S = loc;
  loc++;

  for (let i = 19, j = 0; i < 26; i++, j++) {
    const char = String.fromCharCode(ASCII + i);

    if (j >= 3) {
      loc++;
      j = 0;
    }

    charOBJ[char] = loc;
  }


  charOBJ.Y = 10;
  charOBJ.Z = 10;
};

addCharOBJ();

const solve = (input) => {
  const answer = input.trim().split('').map(v => charOBJ[v]).reduce((acc, cur) => acc + Number(cur), 0);


  console.log(answer);
  return answer;
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  solve(line);
});