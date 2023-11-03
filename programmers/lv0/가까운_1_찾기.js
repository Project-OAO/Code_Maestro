// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// every의 사용법을 알게된 문제
function solution(arr, idx) {
    let answer = -1;
    arr.every((e, i) => {
        if(i >= idx && arr[i] === 1) {
            answer = i;
            return false;
        }
        return true;
    });
    return answer;
}
