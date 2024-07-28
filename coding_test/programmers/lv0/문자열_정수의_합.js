// Lim, Jaedo a.k.a OAO
// 26OCT2023 THURSDAY
// Contact: ashgrayblue0@gmail.com

// 생각보다 쉬운 문제였다.
function solution(num_str) {
    return [...num_str].reduce((acc, cur) => acc + parseInt(cur), 0)
}
