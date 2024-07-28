// Lim, Jaedo a.k.a. OAO
// 21NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 일단 돌아가는 쓰레기를 구현했다..
function solution(n) {
    const notThreeArray = makeNotThreeArray();
    console.log(notThreeArray);
    return notThreeArray[n - 1];
}

function makeNotThreeArray() {
    const answer = [];
    let number = 1;
    
    for (; answer.length <= 100;) {
        if (![...number.toString()].includes('3') && number % 3 !== 0) answer.push(number);
        number += 1;
    }
    
    return answer;
}
