const solution = (input) => {
  const len = input[0].length;

  const obj = {};

  // 객체 생성
  for (let i = 0; i < len; i++) {
    let tmp = 1;
    obj[i + 1] = Array.from({length: len}, () => tmp++);
    obj[i + 1][i] = 0;
  }

  // 배열 순회하면서 하나씩 제거
  input.forEach(row => {
    for (let i = 1; i < len; i++) {
      for (let j = 0; j < i; j++) {
        obj[row[i]][row[j] - 1] = 0;
      }
    }
  });

  // 개수 세기
  let count = 0;

  for (let key in obj) {
    obj[key].forEach(v => {
      if (v !== 0) count++;
    });
  }

  return count;
};

console.log(solution([
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2]
]));

// 이게 완전 탐색하는 대표적인 문제
// 이런 경우는 모든 경우의 수를 다 만들어보면서 판단해봐야한다.