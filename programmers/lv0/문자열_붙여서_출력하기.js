// Lim, Jaedo a.k.a. OAO
// 23OCT2023 MONDAY
// Contact: ashgrayblue0@gmail.com

// 문자열을 붙여서 출력하는 코드, 처음에 기본으로 주어진 코드를 보고 순간 벙쪘다... 자바스크립트에서 사용자 입력을 받는 방법에 대해서는 고민을 해볼 필요가 있을 듯 하다.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    console.log(str1+str2);
});
