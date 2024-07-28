import solution from '../../programmers/lv0/겹치는_선분의_길이';

test.each([
  [
    [
      [0, 2],
      [-3, -1],
      [-2, 1],
    ],
    2,
  ],
  [
    [
      [-3, -1],
      [-2, 3],
      [2, 3],
    ],
    2,
  ],
  [
    [
      [0, 3],
      [-3, -1],
      [-2, 3],
    ],
    4,
  ],
])('겹치는 선분의 길이 테스트', (data, answer) => {
  expect(solution(data)).toEqual(answer);
});
