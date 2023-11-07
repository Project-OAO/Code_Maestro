// Lim, Jaedo a.k.a. OAO
// 07NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 쉽게 구할 수 있다.
function solution(a, d, included) {
    const data = [];
    included.forEach((e, i) => {
        if (e === true) data.push(a + d * i);
    });
    return data.reduce((acc, cur) => acc + cur, 0);
}
