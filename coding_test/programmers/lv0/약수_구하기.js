// Lim, Jaedo a.k.a. OAO
// 05NOV2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 약수는 구하는 테크닉들이 다양하다. 반절만 구하거나, 여러개를 구하거나 하는 등 말이다.
// 그 중 제일 무난한 풀이는 아래와 같다.
function solution(n) {
    const answer = [];
    for (let i = 1; i <= n ; i += 1) {
        if (n % i === 0) answer.push(i);
    }
    return answer;
}
