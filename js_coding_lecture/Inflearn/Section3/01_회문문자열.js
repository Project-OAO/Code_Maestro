const solution = (input) => {
  let answer = 'YES';
  let tmp = input.toUpperCase();

  const mid = Math.floor(input.length / 2);

  for (let i = 0; i < mid; i++) {
    if (tmp[i] !== tmp[input.length - 1 - i]) {
      answer = 'NO';
      break;
    }
  }

  return answer;
};

console.log(solution('gooG'));