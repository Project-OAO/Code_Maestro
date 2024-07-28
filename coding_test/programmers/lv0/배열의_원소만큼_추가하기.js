// Lim, Jaedo a.k.a. OAO
// 28OCT2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 반복을 통해 넣을 수 있다.
function solution(arr) {
    const answer = [];
    arr.forEach((e) => {
        for (let i = 0; i < e; i++) answer.push(e);
    })
    return answer;
}
