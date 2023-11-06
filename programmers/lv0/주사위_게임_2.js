// Lim, Jaedo a.k.a. OAO
// 06NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 조건문을 이용한다.
function solution(a, b, c) {
    let count = 0;
    if(a === b) count += 1;
    if(a === c) count += 1;
    if(b === c) count += 1;

    if(count === 0) return a + b + c;
    else if(count === 1) return (a + b + c) * (a * a + b * b + c * c);
    else return (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c);
}
