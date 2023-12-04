// Lim, Jaedo a.k.a. OAO
// 04DEC2023 Monday
// Contact: ashgrayblue0@gmail.com

// lv0의 고난도 문제 풀다가 푸니까 쉬운느낌...?
function solution(s) {
    const answer = [];

    [...s].forEach((e, i) => {
        [...s].splice(0, i).includes(e) ? answer.push(i - s.lastIndexOf(e, i - 1)) : answer.push(-1);
    });

    return answer;
}
