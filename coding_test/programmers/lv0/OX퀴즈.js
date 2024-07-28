// Lim, Jaedo a.k.a. OAO
// 27NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 조건에 맞춰서 차근차근 하면 된다.
function solution(quiz) {
    const answer = [];
    quiz.forEach(e => {
        let tmp = e.split(' ');
        switch (tmp[1]) {
            case '+' :
                tmp = parseInt(tmp[0]) + parseInt(tmp[2]) === parseInt(tmp[4]) ? 'O' : 'X';
                break;
            case '-' :
                tmp = parseInt(tmp[0]) - parseInt(tmp[2]) === parseInt(tmp[4]) ? 'O' : 'X';
                break;
        }
        answer.push(tmp);
    });
    return answer;
}
