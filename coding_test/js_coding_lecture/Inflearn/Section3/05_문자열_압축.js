// 섹션 3. 문자열 탐색 :: 5. 문자열 압축

const solution = (input) => {
  const answer = {};

  input.split('').forEach(v => {
    if(!answer[v]) answer[v] = 1;
    else answer[v]++;
  });

  let tmp = '';
  for (const key in answer) {
    if(answer[key] !== 1) tmp += `${key}${answer[key]}`;
    else tmp += `${key}`;
  }

  return tmp;
};

console.log(solution('KKHSSSSSSSE'));