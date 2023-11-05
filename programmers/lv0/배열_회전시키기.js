// Lim, Jaedo a.k.a. OAO
// 05NOV2023 Sunday
// Contact : ashgrayblue0@gmail.com

// 배열 자체에 대해서 shift, unshift, push, pop을 하는 것에 대한 처리
function solution(numbers, direction) {
    const answer = [...numbers];
    let tmp;

    if (direction === 'right') {
        tmp = answer.pop();
        answer.unshift(tmp);
    } else {
        tmp = answer.shift();
        answer.push(tmp);
    }
    return answer;
}
