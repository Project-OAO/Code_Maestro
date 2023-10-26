// Lim, Jaedo a.k.a. OAO
// 26OCT2023 THURSDAY
// Contact: ashgrayblue0@gmail.com

// 여러 방법이 있지만 제일 정석적인 방법
function solution(n) {
    let answer = 0;

    for (let i = 1; i<=n; i++) {
        if (n % i === 0) answer += i;
    }

    return answer;
}
