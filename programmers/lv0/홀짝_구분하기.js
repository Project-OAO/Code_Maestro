// Lim, Jaedo a.k.a. OAO
// 31OCT2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 제이퀘리 공부를 하자..
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
});
