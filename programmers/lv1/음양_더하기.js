// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 기본 기능을 활용하자.
function solution(absolutes, signs) {
    let answer = 0;
    signs.forEach((e, i) => e ? answer += absolutes[i] : answer -= absolutes[i]);
    return answer;
}
