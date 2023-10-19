// Lim, Jaedo a.k.a. OAO
// 19OCT2023 THURSDAY
// Contacts: ashgrayblue0@gmail.com

// forEach를 통해 배열 순환을 통해 쉽게 구할 수 있다.
function solution(array, n) {
    let answer = 0;
    array.forEach(function(number){
        if(number === n) answer++;
    })
    return answer;
}
