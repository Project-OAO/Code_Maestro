// Lim, Jaedo a.k.a. OAO
// 07NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 마찬가지로 쉽게 구할 수 있던 문제
function solution(arr, queries) {
    const data = [...arr];
    queries.forEach((e) => {
        for (let i = e[0]; i <= e[1]; i += 1) {
            data[i] += 1;
        }
    })

    return data;
}
