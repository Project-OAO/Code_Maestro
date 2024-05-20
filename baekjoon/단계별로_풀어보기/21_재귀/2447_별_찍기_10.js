const fs = require('fs');

const input = Number(fs.readFileSync(0).toString());

const answer = (n) => {
  const primary = ['*'];
  const previous = n / 3;

  if (n <= 1) return primary;

  // 행을 늘린다.
  const tmp = answer(previous).map(v => v.repeat(3));

  // 열을 늘린다.
  const result = []; // 비우기 전의 배열
  for (let i = 0; i < 3; i++) {
    result.push(...structuredClone(tmp));
  }

  // 가운데를 비운다.
  // 비울 열을 선택한다.
  for (let i = previous; i < previous * 2; i++) {
    // 열 중에서 가운데 행을 비운다.
    const slicedStr = result[i].slice(0, previous);
    const empty = ' '.repeat(previous);
    const str = slicedStr + empty + slicedStr;
    result[i] = str;
  }

  return result;
};

answer(input).forEach(v => console.log(v));