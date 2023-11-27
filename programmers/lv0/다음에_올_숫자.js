// Lim, Jaedo a.k.a. OAO
// 27NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 판별식만 따로 밖으로 제외했다.
function solution(common) {
    return judgeGeoProgress(common) ? common[common.length - 1] * (common[1] / common[0]) : common[common.length - 1] + (common[1] - common[0]);
}

// 등비수열
function judgeGeoProgress(number) {
    return (number[1] / number[0]) === (number[2] / number[1]) ? true : false;
}
