// Lim, Jaedo a.k.a. OAO
// 미완성문제

function solution(dots) {
    const set = new Set();
    let fac = 0;
    
    dots.forEach((e, i) => {
        for (let j = i + 1; j < dots.length; j += 1) {
            let slop = (e[1] - dots[j][1]) / (e[0] - dots[j][0]);
            set.add(slop);
        }
    });
    
    for (let i = dots.length - 1; i >= 1; fac += i, i -= 1);
    
    return set.size !== fac? 1 : 0;
}
