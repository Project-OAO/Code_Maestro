/*
----설계----

[입력]
1과 0으로 이루어진 배열

[출력]
점수

[과정]
1. 배열을 전부 합친다.
2. 0을 기준으로 split을 한다.
3. 해당 1의 숫자만큼 점수를 + 하여 반환한다.

*/


const solution = (input) => {
  const splitted = input.join('').split('0');

  let answer = 0;

  splitted.forEach(v => {
    const tmp = v.length * (1 + v.length) / 2;
    answer += tmp;
  });

  return answer;
};

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));