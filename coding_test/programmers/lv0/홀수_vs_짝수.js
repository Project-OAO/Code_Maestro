// Lim, Jaedo a.k.a. OAO
// 01NOV2023 Wednesday
// Contact: ashgrayblue0@gmailc.com

// reduce를 잘 써먹자
function solution(num_list) {
    const odd = num_list.reduce((acc, cur, i) => {
        if(i % 2 === 0) {
            return acc + cur;
        }
        return acc;
    }, 0);

    const even = num_list.reduce((acc, cur, i) => {
        if(i % 2 === 1) {
            return acc + cur;
        }
        return acc;
    }, 0);

    return odd > even ? odd : even;
}
