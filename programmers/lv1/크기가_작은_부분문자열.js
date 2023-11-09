// Lim, Jaedo a.k.a. OAO
// 09NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 유닛 단위로 기능을 쪼개서, 그 기능을 어떻게 효율적으로, 그리고 가독성 좋게 구현할 수 있을지를 고민하자. 너무 복잡하게 생각하면 오히려 될 것도 안된다.
function solution(t, p) {
    const part = seperateArr(t, p.length);
    const num = Number(p);

    console.log(part);

    return part.reduce((acc, cur) => {
        if (cur <= num) return acc += 1;
        return acc;
    }, 0)
}

// 부분 문자열 추출
function seperateArr(data, len) {
    const part = [];

    for (let i = 0; i <= data.length - len; i += 1) {
        part.push(Number(data.substr(i, len)));
    }

    return part;
}
