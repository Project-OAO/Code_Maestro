// Lim, Jaedo a.k.a. OAO
// 22NOV2023 Wednesday
// Contact: ashgrayblue0@gmail.com

// 각 로직을 나누고, 유닛별로 구현하고 이어 붙이자.
function solution(numlist, n) {
    const distanceObject = {};
    numlist.map((e) => n - e).forEach((e, i) => distanceObject[`${e}`] = numlist[i]);
    const sorted = Object.keys(distanceObject).sort((a, b) => {
        if (Math.abs(a) < Math.abs(b)) return -1;
        else if (Math.abs(a) === Math.abs(b)) return a < b ? -1 : 1;
        return 1;
    });
    return sorted.map((e) => distanceObject[`${e}`]);
}
