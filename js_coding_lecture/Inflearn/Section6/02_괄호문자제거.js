const solution = (input) => {
  const tmp = input.split('');
  const answer = [];
  const stack = [];

  tmp.forEach(v => {
    if(v === '(') stack.push(v);
    else if (v === ')') stack.pop();
    else if (stack.length === 0) answer.push(v);
  });

  return answer.join('');
};

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));