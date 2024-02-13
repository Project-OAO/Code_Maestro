function factorial(num) {
  let mul = 1;
  for (let i = 1; i <= num; i++) {
    mul *= i;
  }

  return mul;
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(2));
