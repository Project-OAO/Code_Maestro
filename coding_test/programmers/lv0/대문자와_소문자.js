// Lim, Jaedo a.k.a. OAO
// 02NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 정규표현식을 잊지말자.
function solution(my_string) {
    return [...my_string].map((e) => {
        if (e.match(/[a-z]/)) {
            return e.toUpperCase();
        }
        return e.toLowerCase();
    }).join('');
}
