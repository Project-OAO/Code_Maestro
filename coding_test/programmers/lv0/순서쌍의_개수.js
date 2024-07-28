// Lim, Jaedo a.k.a. OAO
// 16OCT2023 MONDAY
// Contacts: ashgrayblue0@gmail.com

// 약수 구해서 순서쌍 만드는 문제
function solution(n) {
    let answer = 0;
    for(let i = 0; i<=n; i++){
        if(n%i==0) answer++;
    }
    return answer;
}
