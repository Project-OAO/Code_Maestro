// Lim, Jaedo a.k.a. OAO
// 02NOV2023 Thursday
// Contact : ashgrayblue0@gmail.com

// 수학적 연산 이용
function solution(hp) {
    let count = Math.floor(hp / 5);
    let remain = hp % 5;
    return Math.floor(remain / 3 ) > 0 ? count + 1 + (remain % 3) : count + remain;
}
