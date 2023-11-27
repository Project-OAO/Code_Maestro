// Lim, Jaedo a.k.a. OAO
// 27NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 간만에 쉽게 푼 문제. 조건을 그대로 구현하면 된다.
function solution(arr, query) {
    return query.reduce((acc, cur, i) => {
        return i % 2 === 0 ? acc.slice(0, cur + 1) : acc.slice(cur);
    }, [...arr]);
}
