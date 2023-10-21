// Lim,Jaedo a.k.a. OAO
// 21OCT2023 SATURDAY
// Contact: ashgrayblue0gmail.com

// 찾아보니 대충 로직은 다 비슷하다. 결국은 어떻게 가독성 좋게 표시할 것인가의 문제인데, 그런 관점에서는 콜백지옥에 빠진게 아닌 적절히 사용한 내가 잘한듯?
function solution(num_list) {
    let answer = 0;
    let odd = [];
    let even = [];
    num_list.forEach((e)=>e%2?odd.push(e):even.push(e));
    return parseInt(odd.join(""))+parseInt(even.join(""));
}
