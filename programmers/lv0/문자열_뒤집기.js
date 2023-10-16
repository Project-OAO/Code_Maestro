// Lim, Jaedo a.k.a. OAO
// 16OCT2023 MONDAY
// Contacts: ashgrayblue0@gmail.com

// 문자열 처리에 대한 걸 묻는 문제. 자바스크립트는 인덱스로 문자열 확인이 가능하나, 수정은 안된다.
function solution(my_string) {
    var answer = '';
    for(let i = my_string.length-1; i>=0; i--){
        answer+=my_string[i];
    }
    return answer;
}
