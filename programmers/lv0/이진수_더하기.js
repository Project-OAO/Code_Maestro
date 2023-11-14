// Lim, Jaedo a.k.a. OAO
// 14NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 자바스크립트에서는 진법 변환을 제공하면서, 2진수 그 자체를 다루는 법을 제시하지는 않는다.
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
