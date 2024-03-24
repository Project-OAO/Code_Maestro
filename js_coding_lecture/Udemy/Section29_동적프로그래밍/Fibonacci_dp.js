function fibonacci_dp(n) {
  const memo = [];

  function helper(n) {
    if (n <= 1 && !memo[n]) memo[n] = 1;
    if (!memo[n]) memo[n] = helper(n - 1) + helper(n - 2);

    return memo[n];
  }

  return helper(n);
}

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}