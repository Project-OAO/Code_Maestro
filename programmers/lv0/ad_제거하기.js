// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 정규표현식을 잘 쓰자.
function solution(strArr) {
    return strArr.filter((e) => !(/ad/g.test(e)));
}
