// Lim, Jaedo a.k.a. OAO
// 17NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 오타 하나로 좀 해멨다...
function solution(arr) {
    const stk = [];

    for (let i = 0; i < arr.length;) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i += 1;
            continue;
        }
        else if (stk.at(-1) < arr[i]) {
            stk.push(arr[i]);
            i += 1;
            continue;
        }
        stk.pop();
    }

    return stk;
}
