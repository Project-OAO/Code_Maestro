// Lim, Jaedo a.k.a. OAO
// 06NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 내장 함수를 잘 쓰면 쉽게 풀 수 있다.
function solution(arr, intervals) {
    const tmp1 = arr.slice(intervals[0][0], intervals[0][1] + 1);
    const tmp2 = arr.slice(intervals[1][0], intervals[1][1] + 1);
    return tmp1.concat(tmp2);
}
