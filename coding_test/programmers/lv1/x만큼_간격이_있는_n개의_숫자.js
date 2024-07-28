// Lim, Jaedo a.k.a. OAO
// 23OCT2023 MONDAY
// Contact: ashgrayblue0@gmail.com

// Array로 배열 선언하고 fill채운 이후, map을 쓰는 방식도 있던데, 그냥 가독성과 성능을 위해서 아래와 같은 방법을 채택함. 이런 방식도 있다만 알아두자. 그리고 콜백 지옥에 안빠지기 위해서는 콜백을 자주 쓰지 않는게 좋긴하다.
function solution(x, n) {
    let answer = [];
    for(let i = 1; i<=n; i++){
        answer.push(x*i)
    }
    return answer;
}
