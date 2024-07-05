const solution = (number, input) => {
  let i = 0;
  let j = 0;

  let count = 0;
  let sum = input[i];

  while(i < input.length) {
    if (sum > number || j >= input.length) {
      i++;
      j = i;
      sum = input[i];
    } else {
      count++;
      if (++j < input.length) sum += input[j];
    }
  }

  return count;
};

console.log(solution(5, [1, 3, 1, 2, 3]));