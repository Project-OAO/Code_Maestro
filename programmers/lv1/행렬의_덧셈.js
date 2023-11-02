// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 천천히 정리
function solution(arr1, arr2) {
    const rowLength = arr1.length;
    const columnLength = arr1[0].length;
    const answer = [];
    const inner = [];
    for (let i = 0; i < rowLength ; i += 1) {
        for (let j = 0; j < columnLength ; j += 1) {
            inner.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push([...inner]);
        inner.splice(0);
    }
    return answer;
}
