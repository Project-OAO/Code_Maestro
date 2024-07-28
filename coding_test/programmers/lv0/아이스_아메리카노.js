// Lim, Jaedo a.k.a. OAO
// 19OCT2023 THURSDAY
// Contact: ashgrayblue0@gmail.com

// 항상 콜백만 써야하는 건 아니다.
function solution(money) {
    let cup = Math.floor(money/5500);
    return [cup,money-cup*5500];
}
