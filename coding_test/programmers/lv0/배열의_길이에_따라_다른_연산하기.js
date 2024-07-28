// Lim, Jaedo a.k.a. OAO
// 28OCT2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 3항 연산자를 이용해서 구현해보았다.
function solution(arr, n) {
    return arr.length % 2 === 1 ? arr.map((e, i) => i % 2 === 0 ? e + n : e) : arr.map((e, i) => i % 2 === 1 ? e + n : e);
}
