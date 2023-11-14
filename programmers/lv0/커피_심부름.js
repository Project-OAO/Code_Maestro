// Lim, Jaedo a.k.a. OAO
// 14NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 정규표현식을 익히기 좋은 문제
function solution(order) {
    let answer = 0;
    order.forEach((e) => {
        if (/americano/.test(e)) answer += 4500;
        if (/cafelatte/.test(e)) answer += 5000;
        if (/anything/.test(e)) answer += 4500;
    });
    return answer;
}
