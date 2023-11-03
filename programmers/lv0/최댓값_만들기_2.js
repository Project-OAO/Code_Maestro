// Lim, Jaedo a.k.a. OAO
// 03NOV2023 FRIDAY
// Contact: ashgrayblue0@gmail.com

// 수학적으로 풀자 코드가 복잡해지면 디버깅이 힘들다.
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const exp1 = numbers[0] * numbers[1];
    const exp2 = numbers[numbers.length - 2] * numbers[numbers.length - 1];
    return exp1 < exp2 ? exp2 : exp1;
}
