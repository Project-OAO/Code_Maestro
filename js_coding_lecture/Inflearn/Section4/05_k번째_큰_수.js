const solution = (number, input) => {
  const sums = [];

  for (let i = 0; i < input.length - 2; i++) {
    for (let j = i+1; j < input.length - 1; j++) {
      for (let k = j + 1; k < input.length; k++) {
        sums.push(input[i] + input[j] + input[k]);
      }
    }
  }

  const ordered = sums.sort((a, b) => b - a);
  const deleteDuplicate = Array.from(new Set(ordered));

  return deleteDuplicate[number-1];
};

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));