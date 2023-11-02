// Lim, Jaedo a.k.a. OAO
// 02NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 수학적 지식이 조금이라도 필요한 이유
function solution(cipher, code) {
    return [...cipher].filter((_, i) => {
        if (i % code === code - 1) return true;
        else false;
    }).join('');
}
