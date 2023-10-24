// Lim, Jaedo a.k.a. OAO
// 23OCT2023 MONDAY
// Contact: ashgrayblue0@gmail.com

// 여러 방법이 있지만, 결국 원리는 같다.
function solution(n) {
    let answer = 1;
    while(n%answer != 1) answer++;
    return answer;
}
