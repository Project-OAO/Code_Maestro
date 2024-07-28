// Lim, Jaedo a.k.a. OAO
// 25OCT2023 Wendsday
// Contact: ashgrayblue0@gmail.com

// slice의 2번쨰 인덱스는 해당 값을 포함하지 않는다.
function solution(my_strings, parts) {
    return my_strings.map((e,i)=>e.slice(parts[i][0],parts[i][1]+1)).join("");
}
