// Lim, Jaedo a.k.a. OAO
// 26OCT2023 THRUSDAY
// Contact: ashgrayblue0@gmail.com

// 리버스를 해서 배열을 처리하는 방식도 있지만, 경험상 코드는 가독성이다.
function solution(num_list) {
    const data = [...num_list];
    const last = data.at(-1);
    const before = data.at(-2);

    last > before ? data.push(last - before) : data.push(last * 2);

    return data;
}
