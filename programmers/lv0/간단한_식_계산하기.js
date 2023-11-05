// Lim, Jaedo a.k.a. OAO
// 06NOV2023 Monday
// Contact: ashgrayblue0@gmail.com

// 문자열을 어떻게 처리하는 가에 대한 문제이다.
function solution(binomial) {
    const data = binomial.split(/[\+\-\*]/);
    const op = binomial.match(/[\+\-\*]/);
    data[0] = Number(data[0]);
    data[1] = Number(data[1]);
    switch(op[0]) {
        case '+' :
            return data[0] + data[1];
        case '-' :
            return data[0] - data[1];
        case '*' :
            return data[0] * data[1];
    }
}
