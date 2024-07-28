/*
[설계]
<입력>
문자열
  첫줄에는 앞으로 주어질 문장 수
  둘때줄부터는 반복수 / 반복 문자열

<출력>
문자열
  반복되어서 합친 문자열

<로직>
1. 입력부분
문자열을 입력받으면 이를 라인별로 배열에 담는다.

2. solve 함수
입력을 받았을 경우 인덱스 1번부터 순회한다.

내부에 함수를 하나 더 선언한다.
주어진 문장을 trim()하여 양옆 공백을 없앤 다음 ' '을 기준으로 split한다.
split하고 나온 배열을 기준으로 1번 인덱스를 다시한번 split('')한다.
이렇게 나온 결과물을 map한다.
map 반복할때 내부에서 0번 인덱스만큼 반복해서 합쳐진 문자열을 리턴한다.
이렇게 합친 문자열을 출력한다.
*/

// solve
const solve = (strArr) => {
  const dupStr = (line) => {
    const arr = line.split(' ');
    let duppled = '';

    arr[1].trim().split('').forEach((v) => {
      for (let i = 0; i < Number(arr[0]); i++) {
        duppled = duppled.concat(v);
      }
    });

    console.log(duppled);
  };

  for (let i = 1; i < strArr.length; i++) {
    dupStr(strArr[i]);
  }
};

// 입력
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  solve(input);
});