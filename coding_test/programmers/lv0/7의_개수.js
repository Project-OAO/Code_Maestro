// Lim, Jaedo a.k.a. OAO
// 12NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// reduce를 적극적으로 활용해보기 좋은 문제
function solution(array) {
    return [...array.join('')].reduce((acc, cur) => {
        if (cur == 7) return acc += 1;
        return acc;
    }, 0);
}
