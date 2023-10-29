// Lim, Jaedo a.k.a. OAO
// 29OCT2023 SUNDAY
// Contact: ashgrayblue0@gmail.com

// 쉽게 쉽게 작성해보았다.
function solution(arr) {
    let smallest_index = 0;
    let tmp = arr[0];

    if (arr.length === 1) return [-1];

    arr.forEach((e, i) => {
        if (e < tmp) {
            tmp = e;
            smallest_index = 0;
        }
    });

    return arr.filter((e) => e != tmp);
}
