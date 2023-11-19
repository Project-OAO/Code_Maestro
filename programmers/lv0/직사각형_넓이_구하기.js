// Lim, Jaedo a.k.a. OAO
// 19NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 최대한 읽기 쉬운 코드를 만들자.
function solution(dots) {
    const width = [];
    const height = [];
    dots.forEach((e) => {
        if (!width.includes(e[0])) width.push(e[0]);
        if (!height.includes(e[1])) height.push(e[1]);
    });
    return Math.abs(width[0] - width[1]) * Math.abs(height[0] - height[1]);
}
