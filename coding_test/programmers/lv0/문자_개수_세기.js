// Lim, Jaedo a.k.a. OAO
// 16NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 문자열을 처리하는데 있어서 제일 먼저 정규 표현식을 생각하자.
function solution(my_string) {
    const answer = new Array(52);
    answer.fill(0);
    [...my_string].forEach((e) => {
        if (/[a-z]/g.test(e)) answer[e.charCodeAt() - 71] += 1;
        else answer[e.charCodeAt() - 65] += 1;
    });
    return answer;
}
