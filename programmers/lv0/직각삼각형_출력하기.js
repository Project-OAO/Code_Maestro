// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 하나씩 더해지니 2중 반복은 필요 없다.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const index = Number(input[0]);
    let print = '*';
    for (let i = 0; i < index; i += 1) {
        console.log(print);
        print += '*';
    }
});
