// Lim, Jaedo a.k.a. OAO
// 19OCT2023 THURSDAY
// Contact: ashgrayblue0@gmail.com

// 직접 sort를 구현해도 되지만, 이미 있는걸 쓰는 게 개발자의 1신조이다.
function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}
