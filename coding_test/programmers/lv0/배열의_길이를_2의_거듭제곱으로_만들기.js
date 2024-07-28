// Lim, Jaedo a.k.a. OAO
// 12NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 배열이 [1] 인 경우를 잘못 고려해서 좀 헤멤
function findCloseNumber(number) {
  const binary = number.toString(2);
  if (binary.length === 1) return 1;

  const tmp = [...binary];
  tmp.shift();

  if (parseInt(tmp.join(''), 2) === 0) return 2 ** (binary.length - 1);
  return 2 ** binary.length;
}

function solution(arr) {
  const leng = arr.length; // 오직 arr의 길이만 두고 생각
  const closeNumber = findCloseNumber(leng);
  const answer = [...arr];

  for (let i = 0; i < closeNumber - leng; i += 1) {
    answer.push(0);
  }

  return answer;
}
