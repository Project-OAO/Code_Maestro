function fibonacci_dp(n) {
  const memo = [];

  function helper(n) {
    if (n <= 1 && !memo[n]) memo[n] = 1;
    if (!memo[n]) memo[n] = helper(n - 1) + helper(n - 2);
    
    return memo[n];
  }

  return helper(n);
}