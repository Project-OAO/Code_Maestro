// Lim, Jaedo a.k.a. OAO
// 06NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// reduce를 사용하면 쉽게 표현할 수 있다.
function solution(number) {
    return [...number].reduce((acc, cur) => acc + Number(cur), 0) % 9;
}
