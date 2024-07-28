// Lim, Jaedo a.k.a. OAO
// 22NOV2023 Wednesday
// Contact: ashgrayblue0@gmail.com

// 배열을 만들어서 비교
function solution(A, B) {
    const bArray = [...B];
    let count = 0;
    let tmp = [];

    while (count !== A.length) {
        for (let i = count; i < A.length; i += 1) {
            tmp.push(bArray[i]);
        }
        for (let i = 0; i < count; i += 1) {
            tmp.push(bArray[i]);
        }
        if (tmp.join('') === A) {
            return count;
        }
        count += 1;
        tmp = [];
    }

    return -1;
}
