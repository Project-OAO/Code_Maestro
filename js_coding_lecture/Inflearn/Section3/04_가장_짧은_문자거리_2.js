// 회문문자열 4: 문자 거리
const solution = (input, input2) => {
  let dist = Number.MAX_SAFE_INTEGER - input.length;

  const answer = Array.from({length: input.length}, () => dist);

  input.split('').forEach((v, i) => {
    if(v === input2) dist = 0;
    if (answer[i] > dist) answer[i] = dist;
    dist++;
  });

  input.split('').reverse().forEach((v, i) => {
    if(v === input2) dist = 0;
    if (answer[answer.length - i - 1] > dist) answer[answer.length - i - 1] = dist;
    dist++;
  });

  return answer;
}

console.log(solution('teachemode', 'e'));
