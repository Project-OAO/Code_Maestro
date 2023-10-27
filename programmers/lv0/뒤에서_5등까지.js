// Lim, Jaedo a.k.a. OAO
// 28OCT2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 정렬 -> 앞에만 추출
function solution(num_list) {
    return num_list.sort((a, b) => a - b).slice(0, 5);
}
