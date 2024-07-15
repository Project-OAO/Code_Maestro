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

// 다 스택에 넣고, '('를 만나기 전까지 쭉 뺴는 것도 괜찮아보인다.

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));