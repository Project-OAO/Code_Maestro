// Lim, Jaedo a.k.a. OAO
// 28OCT2023 SATURDAY
// Contact: ashgrayblue0@gmail.com

// 자를때 끝 인덱스는 배열의 길이로.
function solution(num_list) {
    return num_list.sort((a, b) => a - b).slice(5, num_list.length);
}
