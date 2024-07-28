import solution from '../../programmers/lv0/평행';

describe('평행 테스트', () => {
  it.each([
    [
      [
        [1, 4],
        [9, 2],
        [3, 8],
        [11, 6],
      ],
      1,
    ],
    [
      [
        [3, 5],
        [4, 1],
        [2, 4],
        [5, 10],
      ],
      0,
    ],
    [
      [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      1,
    ],
  ])('평행 테스트', (input, output) => {
    expect(solution(input)).toEqual(output);
  });
});
