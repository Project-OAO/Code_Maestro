// Lim, Jaedo a.k.a. OAO
// 08NOV2023 Wednesday
// Contact: ashgrayblue0@gmail.com

// 핵심은 예외를 어떻게 처리할 것인가
function solution(board, k) {
    let answer = 0;

    for (let i = 0; i < board.length; i += 1) {
        if(i > k) break;
        for (let j = 0; j < board[0].length; j += 1) {
            if(i + j > k) break;
            answer += board[i][j];
        }
    }

    return answer;
}
