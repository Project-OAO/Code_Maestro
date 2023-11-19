// Lim, Jaedo a.k.a. OAO
// 19NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 배열 등을 순회하는 데에 있어서, 초기값이 필요한 경우에는 reduce를 사용하자.
function solution(id_pw, db) {
    return db.reduce((answer, e) => {
        if (e[0] !== id_pw[0]) return answer;
        else if (e[1] === id_pw[1]) return 'login';
        return 'wrong pw'
    }, 'fail');
}
