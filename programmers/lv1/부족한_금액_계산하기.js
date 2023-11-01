// Lim, Jaedo a.k.a. OAO
// 01NOV2023 Wednesday
// Contact: ashgrayblue0@gmail.com

// 쉽게 구할 수 있다.
function solution(price, money, count) {
    let sum = 0;
    for (let i = 1; i <= count ; i++) {
        sum += price * i;
    }
    return sum - money > 0 ? sum - money : 0;
}
