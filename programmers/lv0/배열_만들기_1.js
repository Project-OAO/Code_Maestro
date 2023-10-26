// Lim, Jaedo a.k.a. OAO
// 27OCT2023 FRIDAY
// Contact: ashgrayblue0@gmail.com

// for문으로 구현하였다.
function solution(n, k) {
    const answer = [];

    for(let i = 1; i <= Math.floor(n / k); i++){
        answer.push(i * k);
    }

    return answer;
}
