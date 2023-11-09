// Lim, Jaedo a.k.a. OAO
// 09NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 조건을 단순화 할 수 있어야 한다.
// 3개의 수를 더해서 0이 되는 조합을 찾는 문제
function solution(number) {
    const len = number.length;
    return number.reduce((acc, cur, index) => {
        for (let i = index + 1; i < len; i += 1) {
            for (let j = i + 1; j < len; j += 1) {
                if (cur + number[i] + number[j] === 0) acc += 1;
            }
        }
        return acc;
    }, 0);
}
