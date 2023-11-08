// Lim, Jaedo a.k.a. OAO
// 08NOV2023 Wedensday
// Contact: ashgrayblue0@gmail.com

// 천천히 생각해서 풀어보자.
function solution(str1, str2) {
    const result = [];
    let str3 = [...str1]
    let str4 = [...str2]
    str3.forEach((_,i) => {
        result.push(str3[i]);
        result.push(str4[i]);
    });
    return result.join('');
}
