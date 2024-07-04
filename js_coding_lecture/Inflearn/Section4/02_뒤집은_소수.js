const solution = (input) => {
  const tmp = input.map(v => Number(v.toString().split('').reverse().join('')));

  const primeNumber = tmp.filter(v => {
    const mid = Math.floor(v / 2);

    for (let i = 2; i <= mid; i++) {
      if (v % i === 0) return false;
    }

    if (v === 1) return false;

    return true;
  });

  return primeNumber;
};

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));