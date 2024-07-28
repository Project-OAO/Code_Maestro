// Lim, Jaedo a.k.a. OAO
// 05NOV2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// `` 연산자를 사용하자.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const result = Number(input[0]) + Number(input[1]);
    console.log(`${input[0]} + ${input[1]} = ${result}`);
});
