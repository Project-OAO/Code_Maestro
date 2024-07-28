// Lim, Jaedo a.k.a. OAO
// 26OCT2023 THURSDAY
// Contact: ashgrayblue0@gmail.com

// ESLint with Aribnb 규정을 참고하면 Number 보다는 parseInt를, .split 보다는 ...을 사용하길 권장한다.
function solution(n) {
    return [...n.toString()].reverse().map((e) => parseInt(e));
}
