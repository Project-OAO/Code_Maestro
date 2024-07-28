// Lim, Jaedo a.k.a. OAO
// 19OCT2023 THURSDAY
// Contact: ashgrayblue0@gmail.com

// 문자열을 배열로 바꾸기(split) -> 필터를 통해서 조건에 맞는것만 통과시키기 -> 다시 문자열로 바꾸기
function solution(my_string, letter) {
    let answer = my_string.split("")
                .filter((n)=>n!=letter)
                .join("");
    return answer;
}
