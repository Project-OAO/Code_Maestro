// Lim, Jaedo a.k.a. OAO
// 08NOV2023 Wednesday
// Contact: ashgrayblue0@gmail.com

// 생각보다 조건 파악이 까다로웠던 문제
function solution(my_string, indices) {
    const answer = [...my_string];
    const table = new Array(answer.length).fill(1);

    indices.forEach((e) => {
        table[e] = 0;
    });

    return answer.filter((_, i) => {
        return table[i] === 1 ? true : false;
    }).join('');
}
