// Lim, Jaedo a.k.a. OAO
// 19NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 캡슐화의 중요성... 수정이 생겨도 딱 그 부분만 수정하면 되더라.
function evalScore(scores) {
    return scores.map((score) => (score[0] + score[1]) / 2);
}

function makeScoreBoard(evalScore) {
    const sortedScore = [...evalScore].sort((a, b) => b - a);
    const scoreBoard = {};
    let rank = 1;
    scoreBoard[`${sortedScore[0]}`] = 1;

    for (let i = 1; i < sortedScore.length; i += 1) {
        if (sortedScore[i] === sortedScore[i - 1]) {
            rank += 1;
            continue;
        }
        rank += 1;
        scoreBoard[`${sortedScore[i]}`] = rank;
    }

    return scoreBoard;
}

function solution(score) {
    const evaledScore = evalScore(score)
    const scoreBoard = makeScoreBoard(evaledScore);

    return evaledScore.map((e) => scoreBoard[`${e}`]);
}


