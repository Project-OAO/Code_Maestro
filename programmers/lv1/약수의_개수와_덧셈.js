// Lim, Jaedo a.k.a. OAO
// 31OCT2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 약수의 개수 계산을 위해서 별도의 함수를 두었다.
function countDivisor(num) {
    let bound = 0;
    let count = 0;
    for (let i = 1 ; i <= num ; i++) {
        if (num % i === 0) {
            bound = num / i;
            count++;
        }
    }
    return count;
}

function solution(left, right) {
    let answer = 0;
    for (let i = left ; i <= right ; i++) {
        if (!(countDivisor(i) % 2)) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}
