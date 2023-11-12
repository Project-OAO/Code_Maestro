// Lim, Jaedo a.k.a. OAO
// 12NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 조건을 하나씩 따지면 쉽게 구현할 수 있는 문제
function solution(arr, queries) {
  const answer = [...arr];

  for (let j = 0; j < queries.length; j += 1) {
    for (let i = queries[j][0]; i <= queries[j][1]; i += 1) {
      if (i % queries[j][2] === 0) answer[i] += 1;
    }
  }

  return answer;
}
