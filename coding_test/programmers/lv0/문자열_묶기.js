// Lim, Jaedo a.k.a. OAO
// 13NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 객체를 이용한 분리
function solution(strArr) {
    const strArrObject = {};
    
    strArr.forEach((e) => {
        e.length in strArrObject ? strArrObject[e.length] += 1 : strArrObject[e.length] = 1;
    });
    
    let max = 0;
    for (let key in strArrObject) {
        max < strArrObject[key] ? max = strArrObject[key] : max;
    }
    
    return max;
}
