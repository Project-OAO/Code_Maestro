// 재귀를 사용하는 가장 큰 이유 중 하나가 변수를 두지 않으려는 것이다.
// 이에 따라 강사님이 구현한 것처럼 다음과 같이 구현해본다.

function capitalizeWords(words) {
  if (words.length === 1) return [words[0].toUpperCase()];
  const res = words.slice(0, words.length - 1);
  res.push(words.slice(words.length - 1)[0].toUpperCase());
  return res;
}
