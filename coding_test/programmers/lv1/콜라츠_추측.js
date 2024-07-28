// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 너무 어렵게 푼게 아닌가 모르겠다...
function solution(num) {
    let count = 0;

    while (true) {
        if (count >= 500) return -1;
        if (num === 1) break;
        if (num % 2 === 0) {
            count++;
            num /= 2;
        }
        else if (num % 2 === 1) {
            count++;
            num = num * 3 + 1;
        }
    }
    return count;
}
