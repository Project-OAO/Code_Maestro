// Lim, Jaedo a.k.a. OAO
// 20OCT2023 FRIDAY
// Contact: ashgrayblue0@gmail.com

// Number를 도렸을 때 제대로 된 값이 아니면 NaN이 나온 다는 것을 기억하자.
function solution(my_string) {
    let answer = 0;
    my_string.split("").forEach((e)=>{
        if(Number(e)){
            answer += Number(e);
        }
    });
    return answer;
}
