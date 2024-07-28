// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 길어질 것 같으면 함수를 분리하기
function decideWinner (rsp) {
    switch (rsp) {
        case '2' :
            return 0;
        case '0' :
            return 5;
        case '5' :
            return 2;
    }
}

function solution(rsp) {
    return [...rsp].map((e) => decideWinner(e)).join('');
}
