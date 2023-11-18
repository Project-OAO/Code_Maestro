// Lim, Jaedo a.k.a. OAO
// 18NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 조건을 잘 나눠서 해결하자.
function solution(arr, k) {
    const answer = [arr[0]];

    for (let i of arr) {
        if (!answer.includes(i) && answer.length < k) answer.push(i);
    }

    const len = k - answer.length;

    for (let i = 0; i < len; i += 1) {
        answer.push(-1);
    }

    return answer;
}
