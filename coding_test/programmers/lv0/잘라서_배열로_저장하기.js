// Lim, Jaedo a.k.a. OAO
// 16NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// slice를 잘 써보자.
function solution(my_str, n) {
    const answer = [];
    for (let i = 0; i < my_str.length; i += n) {
        answer.push(my_str.slice(i, i + n));
    }
    return answer;
}
