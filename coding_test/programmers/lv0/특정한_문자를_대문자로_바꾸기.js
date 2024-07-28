// Lim, Jaedo a.k.a. OAO
// 28OCT2023 Saturday
// Contact: ashgrayblue0@gmail.com

// uppercase 이용
function solution(my_string, alp) {
    return [...my_string].map((e) => {
        if (e === alp) return alp.toUpperCase();
        return e;
    }).join('');
}
