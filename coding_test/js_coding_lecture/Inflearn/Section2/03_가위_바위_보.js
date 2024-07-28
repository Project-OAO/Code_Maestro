const solution = (input) => {
  const splitted = input.trim().split('\n');
  const A = splitted[1].split(' ');
  const B = splitted[2].split(' ');
  const answer = [];

  A.forEach((v, i) => {
    if (v < 3) {
      if (v < B[i]) answer.push('B');
      else if (v > B[i]) answer.push('A');
      else answer.push('D');
    } else if (B[i] === '1') answer.push('B');
    else if (B[i] === '2') answer.push('A');
    else answer.push('D');
  });


  return answer;
};

console.log(solution(`
5
2 3 3 1 3
1 1 2 2 3`));
