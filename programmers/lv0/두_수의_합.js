// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 자바스크립트에서 숫자형은 Number 하나뿐이며, 이는 부동소수점으로 다뤄진다. 아주 큰 수를 다루기 위해서는 BigInt형을 사용해야 한다.
function solution(a, b) {
    return (BigInt(a) + BigInt(b)).toString();
}
