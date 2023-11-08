// Lim, Jaedo a.k.a. OAO
// 08NOV2023 Wednesday
// Contact: ashgrayblue0@gmail.com

// 문제의 조건을 하나씩 따라가다보면 쉽게 구할 수 있다.
function solution(intStrs, k, s, l) {
    const answer = [];
    let data = 0;

    for(let i = 0; i < intStrs.length; i += 1){
        data = Number([...intStrs[i]].splice(s,l).join(''));
        if(data > k) answer.push(data);
    }

    return answer;
}
