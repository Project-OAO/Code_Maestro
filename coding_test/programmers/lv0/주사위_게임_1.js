// Lim, Jaedo a.k.a. OAO
// 28OCT2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 조건문에 대한 게임
function solution(a, b) {
    if (a % 2 === 1 && b % 2 === 1) {
        return a * a + b * b;
    }
    else if (a % 2 === 0 && b % 2 === 0) {
        return Math.abs(a - b);
    }
    else {
        return 2 * (a + b);
    }
}
