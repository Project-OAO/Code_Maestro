// Lim, Jaedo a.k.a. OAO
// 09NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 하나씩 차근차근 생각하면 쉽게 풀 수 있다.
function solution(num_list, n) {
    const answer = [];
    for (let i = 0; i < num_list.length; i += n) {
        answer.push(num_list.slice(i, i+n));
    }
    return answer;
}
