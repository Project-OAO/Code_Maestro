// Lim, Jaedo a.k.a. OAO
// 22OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// map을 잘 다룰 수 있는 지에 대한 문제
function solution(arr) {
    let answer = arr.map(function(e){
        if(e>=50 && e%2==0){
            return e/2;
        }
        else if(e<50 && e%2==1){
            return e*2;
        }
        else{
            return e;
        }
    });
    return answer;
}
