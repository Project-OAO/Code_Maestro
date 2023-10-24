// Lim, Jaedo a.k.a. OAO
// 25OCT2023 Wendsday
// Contact: ashgrayblue0@gmail.com

// 판단이 들어가는 부분이기에, if문 사용
function solution(n) {
    let answer = 0;
    if(n%2==1){
        for(let i = 1; i <= n; i += 2){
            answer += i;
        }
    }
    else{
        for(let i = 0; i <= n; i += 2){
            answer += (i*i);
        }
    }
    return answer;
}
