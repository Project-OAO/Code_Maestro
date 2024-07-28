// Lim, Jaedo a.k.a. OAO
// 19NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 돌아가는 쓰레기...
function solution(keyinput, board) {
    const boardWidth = (board[0] - 1) / 2;
    const boardHeight = (board[1] - 1) / 2;
    const answer = [0,0];

    keyinput.forEach((key) => {
        switch(key) {
            case 'left' :
                if (answer[0] === -boardWidth) break;
                answer[0] -= 1;
                break;
            case 'right' :
                if (answer[0] === boardWidth) break;
                answer[0] += 1;
                break;
            case 'up' :
                if (answer[1] === boardHeight) break;
                answer[1] += 1;
                break;
            case 'down' :
                if (answer[1] === -boardHeight) break;
                answer[1] -= 1;
                break;
        }
    });

    return answer;
}
