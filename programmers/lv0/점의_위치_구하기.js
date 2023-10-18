// Lim, Jaedo a.k.a. OAO
// 19OCT2023 THURSDAY
// Contacts: ashgrayblue0@gmail.com

// 크게 어렵지 않은 조건문을 활용한 문제
function solution(dot) {
    if(dot[0]>0){
        if(dot[1]>0) return 1;
        else return 4;
    }
    else{
        if(dot[1]>0) return 2;
        else return 3;
    }
}
