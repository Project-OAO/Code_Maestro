// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 필터링을 해야 하는데, filter() 함수의 값은 항상 true, false 값을 기준으로 한다는 것을 기억하자.
function solution(str_list, ex) {
    return str_list.filter((e) => !e.includes(ex)).join('');
}
