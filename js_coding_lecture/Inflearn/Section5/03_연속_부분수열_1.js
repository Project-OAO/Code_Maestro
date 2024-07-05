const solution = (sum, input) => {
  let count = 0;
  let tmp = input[0];

  let i = 0;
  let j = 0;

  while (i < input.length && j < input.length) {
    if (tmp < sum) {
      tmp += input[++j];
    } else if (tmp > sum) {
      tmp -= input[i++];
    } else {
      count++;
      tmp -= input[i++];
      i++;
    }
  }

  return count;
};

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));