// Lim, Jaedo a.k.a. OAO
// 28OCT2023 SATURDAY
// Contact: ashgrayblue0@gmail.com

// 가독성을 조금 살렸다.
function solution(x) {
    const data = [...(x.toString())].reduce((acc, cur) => {
        return parseInt(acc) + parseInt(cur);
    }, 0);
    return x % data === 0 ? true : false;
}
