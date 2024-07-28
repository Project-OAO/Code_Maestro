// Lim, Jaedo a.k.a. OAO
// 31OCT2023 TUESDAY
// Contact: ashgrayblue0@gmail.com

// 코드 중복에 주의
function solution(a, b) {
    const p1 = Number(a.toString() + b);
    const p2 = Number(b.toString() + a);
    return p1 >= p2 ? p1 : p2;
}
