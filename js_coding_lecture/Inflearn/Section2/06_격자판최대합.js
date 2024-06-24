/*
----설계----
[입력]
5*5 배열에 각각 값이 들어있는 것이 주어진다.

[출력]
각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 값을 출력한다.

[로직]
배열 하나에 각 행의 합을 다 추가하고, 열의 합을 추가하고, 대각선의 합을 추가한다.
그리고 가장 큰 값을 반환한다.
*/

const answer = (input) => {
  const sums = [];

  input.forEach((v) => {
    sums.push(v.reduce((acc, cur) => acc + cur));
  });

  for (let i = 0; i < 5; i++) {
    let tmp = 0;
    for (let j = 0; j < 5; j++) {
      tmp += input[j][i];
    }

    sums.push(tmp);
  }

  let tmp = 0;
  for (let i = 0; i < 5; i++) {
    tmp += input[i][i];
  }

  sums.push(tmp);

  tmp = 0;
  for (let i = 0; i < 5; i++) {
    tmp += input[i][4 - i];
  }

  sums.push(tmp);

  return Math.max(...sums);
};

console.log(answer([[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]]));