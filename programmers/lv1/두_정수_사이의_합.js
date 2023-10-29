// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 중간에 크기 비교해서 교환해주는 과정이 필요하다.
function solution(a, b) {
    let answer = 0;
    const num = [a, b];
    if (num[0] > num[1]) {
        tmp = num[0];
        num[0] = num[1];
        num[1] = tmp;
    }
    for (let i = num[0]; i <= num[1]; i++) answer += i;
    return answer;
}
