// Lim, Jaedo a.k.a. OAO
// 18NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 단계별로 하나씩 쪼개야한다. 못쪼개면 구현도 못한다.
function solution(picture, k) {
    const tmp = picture.map((e) => multiplyWords(e, k));
    const result = [];
    tmp.forEach((e) => {
        for (let i = 0; i < k; i++) result.push(e);
    });
    return result;
}

function multiplyWords(word, count) {
    return [...word].map((e) => e.repeat(count)).join('');
}
