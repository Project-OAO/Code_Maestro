// Lim, Jaedo a.k.a. OAO
// 미완성 문제

function solution(num, total) {
    const answer = [];
    let middleIndex, middleNum;

    if (num % 2 === 1) {
        middleIndex = Math.floor(num / 2);
        middleNum = total / num;

        for (let i = middleNum - middleIndex; i <= middleNum + middleIndex; i += 1) {
            answer.push(i);
        }

        return answer;
    }

    middleNum = Math.floor(total / 4); // num / 2 -1 번째 값
    middleIndex = num / 2;

    for (let i = middleNum - middleIndex + 1 ; i <= middleNum + middleIndex; i += 1) {
        answer.push(i);
    }

    return answer;
}
