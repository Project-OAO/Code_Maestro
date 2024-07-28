// Lim, Jaedo a.k.a. OAO
// 14NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 쉽게 구할 수 있다.
function solution(q, r, code) {
    const answer = [...code];
    return answer.filter((e, i) => i % q === r ? true : false).join('');
}
