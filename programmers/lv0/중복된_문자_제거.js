// Lim, Jaedo a.k.a. OAO
// 07NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 함수의 기능을 사용하면 쉽게 풀 수 있다.
function solution(my_string) {
    const setData = new Set([...my_string]);
    return [...setData].join('');
}
