function solution(k, score) {
  const answer = [];
  const tmp = [];

  score.forEach((v) => {
    // 처음 k일까지는 저장
    if (tmp.length < k) {
      tmp.push(v);
    }
    // 이후에는 비교 후 저장
    else if (tmp[k - 1] < v) {
      tmp.pop();
      tmp.push(v);
    }

    tmp.sort((a, b) => b - a);
    answer.push(tmp.at(-1));
  });

  return answer;
}