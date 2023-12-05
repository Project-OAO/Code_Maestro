// Lim, Jaedo a.k.a. OAO
// 06DEC2023 Wednesday
// Contact: ashgrayblue0@gmail.com

// 문자열이 나오면 항상 정규표현식부터 기억하자.
const data = {
    zero : 0,
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
}

function solution(s) {
    const stringArray = Object.keys(data);
    let answer = s;

    stringArray.forEach((e) => {
        let reg = new RegExp(`${e}`, 'g');
        answer = answer.replace(reg, `${data[`${e}`]}`);
    });

    return parseInt(answer);
}

