// Lim, Jaedo a.k.a. OAO
// 16OCT2023 MONDAY
// Contacts: ashgrayblue0@gmail.com

// 배열을 다룰 수 있는지 묻는 문제
function solution(num_list) {
    let answer = [];
    let i, j;
    for(i = num_list.length-1, j = 0; i>=0; i--, j++){
        answer[j] = num_list[i];
    }
    return answer;
}
