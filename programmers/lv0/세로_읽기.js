// Lim, Jaedo a.k.a. OAO
// 07NOV2023 Tuesday
// Contact: ashgrayblue0@gmail.com

// 배열의 원리를 알면 쉽게 구할 수 있따.
function solution(my_string, m, c) {
    return [...my_string].filter((e, i) => {
        if(i % m === c - 1) return true;
        else return false;
    }).join('');
}
