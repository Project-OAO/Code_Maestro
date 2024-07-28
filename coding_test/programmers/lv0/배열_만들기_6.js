// Lim, Jaedo a.k.a. OAO
// 18NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 조건을 그대로 구현하면 되는 문제
function solution(arr) {
    const stk = [];

    for (let i = 0; i < arr.length;) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i += 1;
        } else if (stk.at(-1) === arr[i]) {
            stk.pop();
            i += 1;
        } else {
            stk.push(arr[i]);
            i += 1;
        }
    }
    return stk.length === 0 ? [-1] : stk;
}
