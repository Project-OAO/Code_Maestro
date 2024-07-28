// Lim, Jaedo a.k.a. OAO
// 19OCT2023 THURSDAY
// Contact: ashgrayblue0@gmail.com

// 정렬을 하면 쉽게 구할 수 있다.
function solution(sides) {
    sides.sort((a,b)=>a-b)
    return sides[2]<sides[0]+sides[1]?1:2;
}
