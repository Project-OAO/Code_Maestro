// Lim, Jaedo a.k.a. OAO
// 05NOV2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 반복문을 사용
function solution(n) {
    const answer = [];
    const tmp = [];
    for (let i = 0; i < n ; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if(i !== j) tmp.push(0);
            else tmp.push(1);
        }
        answer.push([...tmp]);
        tmp.splice(0);
    }
    return answer;
}
