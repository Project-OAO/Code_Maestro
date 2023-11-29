// Lim, Jaedo a.k.a. OAO
// 29NOV2023 Wednesday
// Contact: ashgrayblue0@gmail.com

// 너무 어렵게 생각했던 문제인 듯
function solution(num, total) {
    const answer = [];
    let i, first, sum = 0;

    for (i = 1; i < num; i += 1) {
        sum += i;
    }

    first = (total - sum) / num;

    for (i = 0; i < num; i += 1) {
        answer.push(first + i);
    }

    return answer;
}
