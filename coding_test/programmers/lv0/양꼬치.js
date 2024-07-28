// Lim, Jaedo a.k.a. OAO
// 16OCT2023 MONDAY
// Contacts: ashgrayblue0@gmail.com

// 문제는 길게 써있으나, 결국 그냥 조건 하나를 추가해서 덧셈하는 문제, 초등학생 때 많이 풀어본 문제랑 같다.
function solution(n, k) {
    let extra_drinks = Math.floor(n/10);
    return (n*12000)+(2000*(k-extra_drinks));
}
