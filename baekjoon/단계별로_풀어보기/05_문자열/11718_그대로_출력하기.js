/*
[설계]
<입력>
문자열
<출력>
문자열

<로직>
입력받은 배열을 한줄씩 그냥 출력한다.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  input.forEach(v => {
    console.log(v);
  });
});