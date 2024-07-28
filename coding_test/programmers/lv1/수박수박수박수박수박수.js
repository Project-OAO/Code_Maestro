// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// repeat와 slice로 쉽게 구할 수 있다. 난, flag를 사용해보았다.
function solution(n) {
    const answer = [];
    let flag = true;
    for(let i = 0; i < n; i ++){
        flag ? answer.push('수') : answer.push('박');
        flag = !flag;
    }
    return answer.join('');
}
