// Lim, Jaedo a.k.a. OAO
// 17NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 생각을 좀 해야했던 문제
function solution(arr, queries) {
    return queries.map((e) => findSmall(arr, e));
}

function findSmall (arr, query) {
    const tmp = arr.slice(query[0], query[1] + 1).filter((e) => e > query[2]);
    return tmp.length === 0 ? -1 : Math.min(...tmp);
}
