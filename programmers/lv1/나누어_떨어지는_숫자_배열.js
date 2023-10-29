// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 조건을 잘 보고 하나씩 구현하자.
function solution(arr, divisor) {
    const answer = arr.filter((e) => e % divisor === 0);

    answer.sort((a, b) => a - b);

    if (answer.length === 0) answer.push(-1);

    return answer;
}
