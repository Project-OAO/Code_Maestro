// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 자바스크립트에서 출력과, 문자열이 어떻게 처리되는지 이해하자.
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let dada = '';

    for(let j = 0; j < a; j += 1) dada += '*';

    for(let i = 0; i < b; i += 1) {
        console.log(dada);
    }
});
