const solution = (input1, input2) => {
  const answer = [];

  let i = 0;
  let j = 0;

  while(true) {
    if (answer.length === (input1.length + input2.length)) break;

    if(input1[i] < input2[j] && i < input1.length) {
      answer.push(input1[i]);
      i += 1;
    } else if (j < input2.length) {
      answer.push(input2[j]);
      j += 1;
    }
  }

  return answer;
};

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));