const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

const solution = (value) => {
  const tmp = value.slice(1).map(v => {
    const tmp2 = v.split(' ');
    return Number(tmp2[0]) * Number(tmp2[1]);
  });

  return Math.max(...tmp);
};

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  console.log(solution(input));
});