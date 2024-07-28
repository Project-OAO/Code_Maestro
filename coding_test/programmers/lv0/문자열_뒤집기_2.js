// Lim, Jaedo a.k.a. OAO
// 09NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 함수를 조작하면 쉽게 처리할 수 있다.
function solution(my_string, s, e) {
    const stringArr = [...my_string];
    const tmp = stringArr.splice(s, e-s+1).reverse().join('');
    stringArr.splice(s, 0, tmp);

    return stringArr.join('');
}
