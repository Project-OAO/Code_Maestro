function solution(a, b, n) {
  const tmp = n;
  let count = 0;

  while (n > (a - 1)) {
    n = n - a + b;
    count += b;
  }

  return count;
}