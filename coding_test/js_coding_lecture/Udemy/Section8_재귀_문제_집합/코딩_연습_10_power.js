// 재귀 방식으로 구현하는 Math.pow
// input : 밑과 지수가 주어진다.
// output : 곱해진 값을 제출하면 된다.
// 재귀는 항상 2가지 조건을 따져야 한다.
// base case와 자기 자신을 불러오는 조건

// base 조건은 곱해야하는 지수가 0이 되었을 경우
// 지수를 계속 감소시키는 방향으로 진행.

function power(base, exp) {
  if (exp <= 0) return 1;
  return base * power(base, exp - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
