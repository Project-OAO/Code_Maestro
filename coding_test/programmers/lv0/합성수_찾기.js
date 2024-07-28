// Lim, Jaedo a.k.a. OAO
// 07NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// dp같은 알고리즘을 이용하면 쉽게 풀 수 있는 듯 하다.
// 알고리즘을 몰라서 어렵게 푼 문제
function solution(n) {
    const answer = new Set(calMinor());
    const unique = [...answer]

    unique.sort((a, b) => a - b);

    return unique.filter((e) => {
        if (e <= n) return true;
        else return false;
    }).length;
}

function calMinor () {
    const data = [];
    for(let i = 2; i <= 100; i += 1) {
        for(let j = 2; j * i <= 100; j += 1) {
            data.push(i * j);
        }
    }
    return data;
}
