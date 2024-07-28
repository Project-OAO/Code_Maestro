// Lim, Jaedo a.k.a. OAO
// 28OCT2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 배열의 원소를 어떻게 다루느냐에 대한 문제
function solution(num_list, n) {
    const answer = [...num_list.splice(n)].concat([...num_list.splice(0,n)]);
    return answer;
}
