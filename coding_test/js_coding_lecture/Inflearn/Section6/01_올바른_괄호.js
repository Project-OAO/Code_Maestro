const answer = (input) => {
  const stack = [];
  const tmp = input.split('');
  let result = 'YES';

  tmp.forEach(v => {
    if (v === '(') stack.push(v);
    else if (stack.length <= 0) result = 'NO';
    else stack.pop();
  });

  if (stack.length !== 0) result = 'NO';

  return result;
};

console.log(answer('(()(()))(()'));
console.log(answer('()()'));