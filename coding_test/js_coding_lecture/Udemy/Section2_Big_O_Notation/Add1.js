function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total += i;
  }

  return total;
}

console.log(addUpTo(6));
