// Lim, Jaedo a.k.a. OAO
// 10NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 문제의 조건을 제대로 이해하는게 중요하다. 다르게 생각해서 좀 돌아온 문제.
function solution(before, after) {
    const beforeDataArray = [...before].sort((a, b) => a > b ? -1 : 1);
    const afterDataArray = [...after].sort((a, b) => a > b ? -1 : 1);
    let result = 1;
    beforeDataArray.forEach((e, i) => {
        if (e !== afterDataArray[i]) result = 0;
    });
    return result;
}
