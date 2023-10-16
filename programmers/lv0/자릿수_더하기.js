// Lim, Jaedo a.k.a. OAO
// 16OCT2023 MONDAY
// Contacts: ashgrayblue0@gmail.com

// 어렵게 생각하지 말고, 자바스크립트만의 언어 특성을 활용해서 풀자
function solution(n) {
    let answer = 0;
    let converted_number = n.toString();
    for(let i = 0; i<converted_number.length;i++){
        answer += Number(converted_number[i]);
    }
    return answer;
}
