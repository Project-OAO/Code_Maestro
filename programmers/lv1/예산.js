// Lim, Jaedo a.k.a. OAO
// 04NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 문제의 요구사항을 명확히 파악하기
function solution(d, budget) {
    let remain = budget;
    let answer = 0;

    d.sort((a, b) => a - b).every((e) => {
        if (remain < e) return false;
        remain -= e;
        answer += 1;
        return true;
    });

    return answer;
}
