// Lim, Jaedo a.k.a. OAO
// 23OCT2023 MONDAY
// Contact: ashgrayblue0@gmail.com

// forEach를 사용해도 되지만, 가독성을 위해 for of 문을 사용했다.
function solution(numbers, n) {
    let answer = 0;
    for (e of numbers) {
        answer += e;
        if(answer>n) return answer;
    }   
}
