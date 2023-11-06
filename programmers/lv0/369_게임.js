// Lim, Jaedo a.k.a. OAO
// 06NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 쉽게 구할 수 있던 문제
function solution(order) {
    return [...order.toString()].reduce((acc, cur) => {
        if (cur === '3' || cur === '6' || cur === '9') return acc += 1;
        else return acc;
    }, 0);
}
