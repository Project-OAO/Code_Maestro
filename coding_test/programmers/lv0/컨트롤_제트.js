// Lim, Jaedo a.k.a. OAO
// 13NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 여기까지는 쉬운데, 만약 다음 숫자를 가지고 한다면...? 이전의 값이 Z인지를 체크해서 변환하는 방법도 가능하다.
function solution(s) {
    const operatorArray = s.split(' ');
    let answer = 0;

    operatorArray.forEach((e, i) => {
        e === 'Z' ? answer -= Number(operatorArray[i - 1]) : answer += Number(e);
    })

    return answer;
}
