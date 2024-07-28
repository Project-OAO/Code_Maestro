// Lim, Jaedo a.k.a. OAO
// 17NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// BigInt를 생각하지 못했다...
function calculateFactorial(n) {
    let answer = BigInt(1);
    for (let i = 1; i <= n; i += 1) {
        answer *= BigInt(i);
    }
    return answer;
}

function solution(balls, share) {
    if(balls === share) return 1;
    return calculateFactorial(balls) / calculateFactorial(balls-share) / calculateFactorial(share);
}
