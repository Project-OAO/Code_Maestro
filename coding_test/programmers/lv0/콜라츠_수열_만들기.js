// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 조건에 맞춰서 하나씩 구현
function solution(n) {
    const answer = [n];
    let tmp = n;
    while (tmp !== 1) {
        if (tmp % 2 === 0) {
            tmp /= 2;
            answer.push(tmp);
        } else {
            tmp = tmp * 3 + 1;
            answer.push(tmp);
        }
    }
    return answer;
}
