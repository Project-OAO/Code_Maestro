// Lim, Jaedo a.k.a. OAO
// 28OCT2023 SATURDAY
// Contact: ashgrayblue0@gmail.com

// 여러번 식을 호출하지 말고 값을 변수에 대입해서 생각하자.
function solution(n) {
    const rootD = Math.sqrt(n);
    return rootD % 1 === 0 ? (rootD + 1) ** 2 : -1;
}
