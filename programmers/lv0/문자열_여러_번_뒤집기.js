// Lim, Jaedo a.k.a. OAO
// 17NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 문자열 풀이
function solution(my_string, queries) {
    const my_array = [...my_string];

    queries.forEach((query) => {
        let tmp = my_array.splice(query[0], query[1] - query[0] + 1);
        tmp.reverse();
        my_array.splice(query[0], 0, ...tmp);
    });

    return my_array.join('');
}
