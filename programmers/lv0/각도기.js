// Lim, Jaedo a.k.a. OAO
// 16OCT2023 MONDAY
// Contacts: ashgrayblue0@gmail.com

// 조건문을 사용하는 문제. 근데 크게 좋은 문제는 아니인게, 그 외의 값이 들어올 때에 대한 예외처리 조항이 없다. 쉬운 문제니까 그런걸로 이해하자.
function solution(angle) {
    if(0<angle && angle<90){
        return 1;
    }
    else if(angle === 90){
        return 2;
    }
    else if(90<angle && angle<180){
        return 3;
    }
    else if(angle === 180){
        return 4;
    }
}
