// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 쉽게 구할 수 있다.
function solution(array) {
    const answer = [0, 0];
    array.forEach((e, i) => {
        if(answer[0] < e) {
            answer [0] = e;
            answer [1] = i;
        }
    })
    return answer;
}
