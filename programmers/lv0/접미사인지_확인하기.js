// Lim, Jaedo a.k.a. OAO
// 27OCT2023 FRIDAY
// Contact: ashgrayblue0@gmail.com

// 문자열의 길이를 다루는 법을 익히자.
function solution(my_string, is_suffix) {
    return my_string.includes(is_suffix, my_string.length - is_suffix.length) ? 1 : 0;
}
