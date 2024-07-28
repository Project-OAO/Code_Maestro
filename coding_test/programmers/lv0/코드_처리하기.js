// Lim, Jaedo a.k.a. OAO
// 26NOV2023 Sunday
// Contact: ashgrayblue0@gmail.com

// 문자열인지, 숫자인지 처리 잘 하기
function solution(data) {
  const code = [...data];
  const ret = [];
  let mode = 0;

  for (let idx = 0; idx < code.length; idx += 1) {
    if (mode === 0) {
      if (code[idx] === '1') {
        mode = 1;
        continue;
      }

      if (idx % 2 === 0) {
        ret.push(code[idx]);
      }
    } else {
      if (code[idx] === '1') {
        mode = 0;
        continue;
      }

      if (idx % 2 === 1) {
        ret.push(code[idx]);
      }
    }
  }

  return ret.length === 0 ? 'EMPTY' : ret.join('');
}
