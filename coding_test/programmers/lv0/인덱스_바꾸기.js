// Lim, Jaedo a.k.a. OAO
// 03NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 쉽게 구할 수 있다.
function solution(my_string, num1, num2) {
    const answer = [...my_string];
    answer[num1] = my_string[num2];
    answer[num2] = my_string[num1];
    return answer.join('');
}
