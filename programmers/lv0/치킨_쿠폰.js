// Lim, Jaedo a.k.a. OAO
// 20NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 조금 고민을 해야 했다. 그래서, 실제 예시를 그려서 규칙성을 파악하는데 많은 시간을 쏟았다.
function solution(chicken) {
    let tmp = calBonus(chicken);
    let sum = tmp[0];
    while (tmp[1] >= 10) {
        tmp = calBonus(tmp[1]);
        sum += tmp[0];
    }
    return sum;
}

function calBonus(number) {
    let quota = 0;
    let rest = 0;
    let tmp = number;

    while(tmp >= 10) {
        quota += Math.floor(tmp / 10);
        rest += tmp % 10;
        tmp = Math.floor(tmp / 10);
    }

    return [quota, tmp+rest];
}
