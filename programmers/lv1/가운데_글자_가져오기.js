// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 문자를 배열로 나눠서 처리
function solution(s) {
    const data = [...s];
    const length = data.length;
    return length % 2 === 0 ? data[length/2 -1] + data[length/2] : data[Math.floor(length/2)];
}
