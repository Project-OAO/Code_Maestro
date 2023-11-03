// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@Gmail.com

// 쉽게 구할 수 있다.
function solution(my_string) {
    return [...my_string].filter((e) => !isNaN(e)).map((e) => Number(e)).sort((a,b) => a-b);
}
