// Lim, Jaedo a.k.a. OAO
// 27OCT2023 FRIDAY
// Contact: ashgrayblue0@gmail.com

// 3항 연산자는 정말 유용하다. 그리고 Lv0 아직까지는 문제가 반복되는데, 이번에는 reduce를 활용하는 문제.
function solution(num_list) {
    return num_list.length > 10 ? num_list.reduce((acc, cur) => acc + cur, 0) : num_list.reduce((acc, cur) => acc * cur, 1);
}
