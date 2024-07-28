// Lim, Jaedo a.k.a. OAO
// 04NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 기능의 분리
function convert(word) {
    let target = [...word];

    for (let i = 0; i < word.length; i += 1) {
        i % 2 === 0 ? target[i] = target[i].toUpperCase() : target[i] = target[i].toLowerCase();
    }

    return target.join('');
}

function solution(s) {
    return s.split(' ').map((e) => convert(e)).join(' ');
}
