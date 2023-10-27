// Lim, Jaedo a.k.a. OAO
// 27OCT2023 FRIDAY
// Contact: ashgrayblue0@gmail.com

// 문제를 제대로 잘 읽는 것도 실력이다.
function solution(strArr) {
    return strArr.map((e, i) => {
       return i % 2 === 1? e.toUpperCase() : e.toLowerCase();
    });
}
