// Lim, Jaedo a.k.a. OAO
// 17OCT2023 TUESDAY
// Contacts: ashgrayblue0@gmail.com

// 코딩에서 수학적 사고가 중요한 이유를 보여주는 문제
// slice * 피자수 >= n 에서 생각하면 쉽게 문제를 풀 수 있다.
// 다만 나는 implicit type cast가 이루어져 parseFloat없이 결과값이 소수로 나올 줄 알았는데 아니었다... 아마 부등호때문에 나눗셈 결과가 int로 떨어지는 듯 하다.
// 이런 경우는 아래처럼 바꿔주면 된다.
function solution(slice, n) {
    let answer;
    for(answer = 0; answer < parseFloat(n)/slice; answer++);
    return answer;
}
