// Lim, Jaedo a.k.a. OAO
// 16OCT2023 MONDAY
// Contacts: ashgrayblue0@gmail.com

// 배열과 문자열 모두 자바스크립트에서는 length를 통해 길이를 구할 수 있음을 알면 쉬운 문제
function solution(strlist) {
    var answer = [];
    for(let i = 0; i<strlist.length;i++){
        answer[i] = strlist[i].length;
    }
    return answer;
}
