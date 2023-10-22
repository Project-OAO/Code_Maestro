// Lim, Jaedo a.k.a. OAO
// 22OCT2023 Sunday
// Contact: ashgrayblue0@gmail.com

// map의 함수 특성을 잘 알고 있으면 쉽게 구현 가능한 문제.
function solution(my_string, index_list) {
    return index_list.map((e)=>{
        return my_string[e];
    }).join('');
}
