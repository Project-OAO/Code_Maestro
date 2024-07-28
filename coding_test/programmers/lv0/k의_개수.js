// Lim, Jaedo a.k.a. OAO
// 10NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 배열로 나누고 하나씩 계산
function solution(i, j, k) {
    const numberArray = [];
    let answer;

    for (let count = i; count <= j; count += 1) {
        numberArray.push(...count.toString());
    }

    answer = numberArray.reduce((answer, cur) => {
        if(Number(cur) === k) return answer + 1;
        return answer;
    }, 0);

    return answer;
}
