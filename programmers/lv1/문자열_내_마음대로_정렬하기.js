// Lim, Jaedo a.k.a. OAO
// 05DEC2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 문자열의 크기비교하여 sort에 사용할 수 있는지 여부
function solution(strings, n) {
    const answer = [...strings];

    answer.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        return a > b ? 1 : -1;
    });

    return answer;
}
