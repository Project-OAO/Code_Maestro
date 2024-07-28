// Lim, Jaedo a.k.a. OAO
// 12NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 단계를 나눠서 하나씩 계산하자.
function solution(s) {
  const target = [...s].sort((a, b) => (a < b ? -1 : 1));
  const tmp = [];
  let index = 0;
  target.forEach((e, i) => {
    if (e !== target[i + 1]) {
      tmp.push(target.slice(index, i + 1));
      index = i + 1;
    }
  });

  const answer = [];
  tmp.forEach(e => {
    if (e.length === 1) answer.push(e[0]);
  });

  return answer.join('');
}
