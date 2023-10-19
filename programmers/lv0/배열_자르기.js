// Lim, Jaedo a.k.a. OAO
// 19OCT2023 THURSDAY
// Contacts: ashgrayblue0@gmail.com

// 배열의 인덱싱만 알고 있으면 굉장히 쉽게 다룰 수 있는 문제.
// .slice 메서드를 써도 된다.
function solution(numbers, num1, num2) {
    let answer = [];
    for(let i = num1; i<=num2; i++){
        answer.push(numbers[i]);
    }
    return answer;
}
