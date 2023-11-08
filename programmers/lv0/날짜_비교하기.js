// Lim, Jaedo a.k.a. OAO
// 08NOV2023 Wendesday
// Contact: ashgrayblue0@gmail.com

// 예외를 항상 잘 생각하자.
function solution(date1, date2) {
    for(let i = 0; i < 3; i += 1) {
        if(date1[i] < date2[i]) return 1;
        else if(date1[i] > date2[i]) return 0;
    }
    return 0;
}
