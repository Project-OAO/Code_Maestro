// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 유클리드 호제법 이용
function solution(n, m) {
    let tmp = Math.max(n, m);
    let tmp2 = Math.min(n, m);
    let remain = tmp % tmp2;
    const answer = [];

    while (remain != 0) {
        tmp = tmp2;
        tmp2 = remain;
        remain = tmp % tmp2;
    }

    answer.push(tmp2);

    answer.push(n * m / tmp2);

    return answer;
}
