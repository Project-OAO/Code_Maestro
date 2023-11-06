// Lim, Jaedo a.k.a. OAO
// 06NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// case문을 통해 쉽게 구현하였다.
function solution(numLog) {
    const answer = [];
    let tmp;
    for (let i = numLog.length - 1; i > 0; i -= 1) {
        tmp = numLog[i] - numLog[i - 1];
        switch (tmp) {
            case 1 :
                answer.push('w');
                break;
            case -1 :
                answer.push('s');
                break;
            case 10 :
                answer.push('d');
                break;
            case -10 :
                answer.push('a');
                break;
            default :
                break;
        }
    }
    return answer.reverse().join('');
}
