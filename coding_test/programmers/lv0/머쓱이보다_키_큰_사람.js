// Lim, Jaedo a.k.a. OAO
// 16OCT2023 MONDAY
// Contacts: ashgrayblue0@gmail.com

// 조건문과 반복문 결합해보는 문제
function solution(array, height) {
    let answer = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]>height) answer++;
    }
    return answer;
}
