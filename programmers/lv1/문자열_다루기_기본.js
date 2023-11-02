// Lim, Jaedo a.k.a. OAO
// 02NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 솔직히 뭐가 틀렸는지 모르겠는 문제
function solution(s) {
    return (s.length === 4 || s.length === 6) && !(/[^0-9]/g.test(s));
}
