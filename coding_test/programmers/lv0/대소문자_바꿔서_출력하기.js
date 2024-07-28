// Lim, Jaedo a.k.a. OAO
// 19NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 문자열 처리는 항상 정규표현식부터 생각하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];

    console.log(([...str].map((e) => /[a-z]/.test(e) ? e.toUpperCase() : e.toLowerCase())).join(''));
});
