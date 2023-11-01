// Lim, Jaedo a.k.a. OAO
// 01NOV2023 Wednesday
// Contact: ashgrayblue0@gmail.com

// 문자열을 >나 <로 비교할 수 있다.
function solution(s) {
    return [...s].sort((a, b) => a > b ? -1 : 1).join('');
}
