// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 값을 별도로 처리해주는게 핵심
function solution(a, b) {
    const data = a.toString() + b.toString();
    const data2 = 2 * a * b;
    return data > data2 ? parseInt(data) : data2;
}
