// Lim, Jaedo a.k.a. OAO
// 11NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 생각보다 고려할게 많았다. 책임 분리를 위해서 함수를 나눴다.
function shiftWord(word, index) {
    let asciiCode = word.charCodeAt();

    if (asciiCode >= 65 && asciiCode <= 90) {
        asciiCode += index;
        if (asciiCode > 90) asciiCode -= 26;
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        asciiCode += index;
        if (asciiCode > 122) asciiCode -= 26;
    }

    return String.fromCharCode(asciiCode);
}

function solution(s, n) {
    const planeText = [...s];
    const answer = [];

    planeText.forEach((e) => {
        if(e !== ' ') answer.push(shiftWord(e, n));
        else answer.push(' ');
    });

    return answer.join('');
}
