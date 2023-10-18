// Lim, Jaedo a.k.a. OAO
// 19OCT2023 THURSDAY
// Contacts: ashgrayblue0@gmail.com

// 각 문자를 분해해서 하나씩 반복할 수 있는지 여부를 테스트하는 문제
function solution(my_string, n) {
    let answer = '';
    let splited_string = my_string.split("");
    let i, j;
    for(j = 0; j<splited_string.length;j++){
       for(i = 0; i<n; i++){
            answer += splited_string[j];
        }
    }
    return answer;
}
