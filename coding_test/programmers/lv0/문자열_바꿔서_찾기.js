// Lim, Jaedo
// 28OCT2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 여러개의 콜백함수 사용
function solution(myString, pat) {
    return [...myString].map((e) => e === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}
