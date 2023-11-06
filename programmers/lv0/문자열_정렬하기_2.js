// Lim, jaedo a.k.a. OAO
// 06NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 로직을 잘 이해하자.
function solution(my_string) {
    return [...my_string.toLowerCase()].sort((a, b) => a < b ? -1 : 1).join('');
}
