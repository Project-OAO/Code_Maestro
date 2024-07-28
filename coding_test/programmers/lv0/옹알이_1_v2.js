// Lim, Jaedo a.k.a. Zen
// 10FEB2023
// contact : ashgrayblue0@gmail.com

function solution(babbling) {
    const reg = /^(aya|ye|woo|ma)+?$/;
    let count = 0;

    babbling.forEach(e => {
        if(reg.test(e)) count += 1;
    });

    return count;
}
