// Lim, Jaedo a.k.a. OAO
// 01DEC2023 Friday
// Contact: ashgrayblue0@gmail.com

// 카운트할 게 여러개이므로, 객체에 할당해서 셌다.
function solution(a, b, c, d) {
    const input = [a, b, c, d];
    const data = {};

    input.forEach((e) => data[`${e}`] = 0);
    input.forEach((e) => data[`${e}`] += 1);

    const keys = Object.keys(data).map((e) => parseInt(e));

    switch (keys.length) {
        case 1 :
            return keys[0] * 1111;
        case 2 :
            if (data[`${keys[0]}`] === 3) {
                return Math.pow(10 * keys[0] + keys[1], 2);
            } else if (data[`${keys[1]}`] === 3) {
                return Math.pow(10 * keys[1] + keys[0], 2);
            }
            return (keys[0] + keys[1]) * Math.abs(keys[0] - keys[1]);
        case 3 :
            let tmp = 1;
            keys.forEach((e) => {
                if (data[`${e}`] !== 2) tmp *= e;
            });
            return tmp;
        case 4 :
            return Math.min(...keys);
    }
}
