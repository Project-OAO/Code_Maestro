// Lim, Jaedo a.k.a. OAO
// 31OCT2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// reduce를 정말 잘쓰자.
function solution(a, b) {
    return a.reduce((acc, cur, i) => {
        return acc+cur*b[i]
    }, 0);
}
