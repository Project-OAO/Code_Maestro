// Lim, Jaedo a.k.a. OAO
// 28OCT2023 SATURDAY
// Contact: ashgrayblue0@gmail.com

// 콜백함수로 쉽게 구현이 가능하다.
function solution(n) {
    return parseInt([...(n.toString())].sort((a, b) => b - a).join(''));
}
