const solution = (dates, input) => {
  let sum = input[0] + input[1] + input[2];
  let tmp = sum;

  for (let i = dates; i < input.length; i++) {
    tmp = tmp - input[i - dates] + input[i];
    if (sum < tmp) sum = tmp; // sum = Math.max(sum, tmp); 와 같은 형태로 구현할 수 있다.
  }

  return sum;
};

console.log(solution(3,[12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));