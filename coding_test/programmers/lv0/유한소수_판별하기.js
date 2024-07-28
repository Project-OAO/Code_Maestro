// Lim, Jaedo a.k.a. OAO
// 20NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 순서대로 기약분수 구하고, 분모 조건에 맞게 판단
function solution(a, b) {
    const target = [a/calGCD(a, b), b/calGCD(a, b)];
    return checkPrimeFactor(target[1]) ? 1 : 2;
}

function calGCD(a, b) {
    let quota = a;
    let rest = b % a;
    let tmp = 0;

    while (rest !== 0) {
        tmp = quota;
        quota = rest;
        rest = tmp % rest;
    }

    return quota;
}

function checkPrimeFactor(number) {
    let tmp = number;
    while (tmp !== 1) {
        if (tmp % 2 === 0) tmp /= 2;
        else if (tmp % 5 === 0) tmp /= 5;
        else return false;
    }
    return true;
}
