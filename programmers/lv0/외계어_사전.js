// Lim, Jaedo a.k.a. OAO
// 18NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 정규 표현식을 쓰는 것과 set의 길이는 size를 쓴다는 것에 주의하자.
function solution(spell, dic) {
    let answer = 2;
    dic.forEach((e) => {
        if (checkInclude(spell, e) === spell.length) answer = 1;
    });
    return answer;
}

function checkInclude(spell, word) {
    const reg = new RegExp(`[${spell.join('')}]`, 'g');
    const set = new Set(word.match(reg));
    return set.size;
}
