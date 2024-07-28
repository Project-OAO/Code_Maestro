// Lim, Jaedo a.k.a. OAO
// 18NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 한 줄로 풀리는 문제. 너무 옛날 방식의 문제였다.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`a = ${input[0]}\nb = ${input[1]}`)
});
