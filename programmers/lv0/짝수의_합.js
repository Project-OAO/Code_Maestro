// Lim, Jaedo a.k.a. OAO
// 16OCT2023 MONDAY
// Contacts: ashgrayblue0@gmail.com

// for문을 잘 다룰 수 있는 문제. 그냥 2씩 더해주면 된다. (곱보단 덧셈이 부하가 적다. 뭐 최근에는 곱셈 로직이 따로 있어서 잘 처리해준다고 하지만 전통적으로...)
function solution(n) {
    let answer = 0;
    for(let i = 0; i<=n; i+=2) answer+=i;
    return answer;
}
