// Lim, Jaedo a.k.a. OAO
// 09NOV2023 Thursday
// Contact: ashgrayblue0@gmail.com

// 수학을 잘하면 훨씬 쉽게 풀 수 있더라...
function solution(num_list) {
    let count = 0;

    for (let i = 0; i < num_list.length; i += 1) {
        count += devider(num_list[i]);
    }

    return count;
}

function devider(num) {
    let count = 0;
    while (num !== 1) {
        num % 2 === 0 ? num /= 2 : num = (num - 1) / 2;
        count += 1;
    }
    return count;
}
