// Lim, Jaedo a.k.a. OAO
// 18NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 배열의 ... 과 splice 연산의 동작을 이해하면 쉽게 풀 수 있다.
function solution(my_string, overwrite_string, s) {
    const tmp = [...my_string];
    tmp.splice(s, overwrite_string.length, ...overwrite_string);
    return tmp.join('');
}

