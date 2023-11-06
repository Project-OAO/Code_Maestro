// Lim, Jaedo a.k.a. OAO
// 06NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// indexOf이용
function solution(num, k) {
    const answer = num.toString().indexOf(k);
    return answer !== -1 ? answer + 1 : -1;
}
