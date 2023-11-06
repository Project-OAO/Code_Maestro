// Lim, Jaedo a.k.a. OAO
// 06NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 문자열을 정렬하는 방법을 알면 쉽게 풀 수 있다.
function solution(my_string) {
    const answer = [];
    for (let i = 0; i < my_string.length; i += 1) {
        answer.push(my_string.substr(i));
    }
    return answer.sort((a, b) => a > b ? 1 : -1);
}
