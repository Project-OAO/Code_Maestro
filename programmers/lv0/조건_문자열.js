// Lim, Jaedo a.k.a. OAO
// 18NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// if문보다는 case문이 가독성이 더 좋다.
function solution(ineq, eq, n, m) {
    switch (ineq + eq) {
        case '<=' :
            return n <= m ? 1 : 0;
        case '>=' :
            return n >= m ? 1 : 0;
        case '>!' :
            return n > m ? 1 : 0;
        case '<!' :
            return n < m ? 1 : 0;
    }
}
