// Lim, Jaedo a.k.a. OAO
// 27OCT2023 FRIDAY
// Contact: ashgrayblue0@gmail.com

// 쉽게 표현이 가능하다.
function solution(myString) {
    return [...myString].map((e) => e < 'l' ? 'l' : e).join('');
}

