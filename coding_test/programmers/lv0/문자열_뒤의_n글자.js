// Lim, Jaedo a.k.a. OAO
// 22OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 슬라이스의 원리를 알면 쉽게 풀 수 있다.
function solution(my_string, n) {
    let length = my_string.length - n;
    return my_string.slice(length);
}
