// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 굳이 3진법을 뒤집을 필요 없다.
function solution(n) {
    let answer = 0;
    const data = [...n.toString(3)].forEach((e, i) => answer += e * (3 ** i));
    return answer;
}
