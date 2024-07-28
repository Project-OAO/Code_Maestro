// Lim, Jaedo a.k.a. OAO
// 17NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 우리말은 세세하게 보자..
function solution(str_list) {
    const indexL = str_list.indexOf('l');
    const indexR = str_list.indexOf('r');

    if (indexL === -1 && indexR === -1) return [];
    else if (indexL === -1) return str_list.slice(indexR + 1);
    else if (indexR === -1) return str_list.slice(0, indexL);
    return (indexL < indexR) ? str_list.slice(0, indexL) : str_list.slice(indexR + 1);
}
