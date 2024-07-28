// Lim, Jaedo a.k.a. OAO
// 10NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 변수명을 잘 정하자. 이거 하나로 계속 애먹는다.
function changeOrder (array, index) {
    let num = [...array];
    let tmp = num[index[0]];

    num[index[0]] = num[index[1]];
    num[index[1]] = tmp;

    return num;
}

function solution(arr, queries) {
    let answer = [...arr];

    for (let i = 0; i < queries.length; i += 1) {
       answer = changeOrder(answer, queries[i]);
    }

    return answer;
}
