// Lim, Jaedo a.k.a. OAO
// 16NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 기능의 분리
function checkPrimeFactor(number) {
    let answer;

    if (number <= 1) return -1;

    for (answer = 2; answer <= number; answer += 1) {
        if (number % answer === 0) {
            break;
        }
    }

    return answer;
}

function solution(n) {
    const answer = new Set();
    let data = n;

    while (true) {
        let tmp = checkPrimeFactor(data);

        if (tmp === -1) break;
        data /= tmp;
        answer.add(tmp);
    }

    return [...answer];
}
