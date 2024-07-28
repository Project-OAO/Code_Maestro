// Lim, Jaedo a.k.a. OAO
// 16OCT2023 MONDAY
// Contacts: ashgrayblue0@gmail.com

// 짝수의 합 문제에서 조금 더 나간 문제, 배열의 길이를 어떻게 알아낼 것인지가 관건인데, 이는 c 등에서 배열의 길이 처리가 굉장히 중요하기 때문에 만들어진 문제로 보이나, 자바스크립트에서는 array자체에 length 값이 존재하므로 별 문제가 되지 않는다.
function solution(numbers) {
    let answer = 0;
    for(let i = 0; i<numbers.length; i++){
        answer += numbers[i];
    }
    answer /= numbers.length;
    return answer;
}
