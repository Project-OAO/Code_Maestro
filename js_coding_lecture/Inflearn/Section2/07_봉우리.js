/*
----설계----
[입력]
자연수 배열

[출력]
봉우리의 갯수

[로직]
각 배열의 요소를 순회하면서 상하좌우를 비교, 그리고 가운데에 있는 숫자가 제일 크면 개수 추가
다 1로 셋팅하고, 조건에 위배되면 0으로 바꿔서 나중에 1의 갯수만 세기
*/

const answer = (input) => {
  const tmp = Array.from({length: input.length}, () => Array.from({length: input.length}, () => 1));

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - 1; j++) {
      if (input[i][j] < input[i][j + 1]) tmp[i][j] = 0;
      else tmp[i][j + 1] = 0;
      if (input[i][j] < input[i + 1][j]) tmp[i][j] = 0;
      else tmp[i + 1][j] = 0;
    }
  }

  for (let i = 0; i < input.length - 1; i++) {
    if (tmp[input.length - 1][i] < tmp[input.length - 1][i + 1]) tmp[input.length - 1][i] = 0;
    else tmp[input.length - 1][i + 1] = 0;
  }

  let count = 0;

  tmp.forEach(v => {
    v.forEach(e => {
      if (e === 1) count++;
    });
  });

  return count;
};

console.log(answer([[5, 3, 7, 2, 3], [3, 7, 1, 6, 1], [7, 2, 5, 3, 4], [4, 3, 6, 4, 1], [8, 7, 3, 5, 2]]));

// 이렇게 하는 방법도 있지만, x, y 좌표를 두고, 이게 0보다 작거나 길이보다 클 때 제약조건을 두는 방법도 존재한다.