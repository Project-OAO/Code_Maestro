// Lim, Jaedo a.k.a. OAO
// 23OCT2023 MONDAY
// Contact: ashgrayblue0@gmail.com

// Reduce를 쓰는 방법도 있으니 참고하자.
function solution(n) {
    let answer = 0;
    n.toString().split('').forEach((e)=>answer+=Number(e));
    return answer;
}
