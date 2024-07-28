// Lim, Jaedo a.k.a. OAO
// 10NOV2023 Friday
// Contact: ashgrayblue0@gmail.com'

// 여러 방식을 생각해보았지만 이것밖에 생각이 안나더라..
function calculateFactorial(e) {
    let result = 1;

    for (let i = 1; i <= e; i += 1) {
        result *= i;
    }

    return result;
}

function solution(n) {
    const answer = {};
    let i;
    for (i = 1; i <= 10; i += 1) {
        answer[`${i}`] = calculateFactorial(i);
    }

    for (i = 1; answer[`${i}`] <= n; i += 1);

    return i-1;
}
