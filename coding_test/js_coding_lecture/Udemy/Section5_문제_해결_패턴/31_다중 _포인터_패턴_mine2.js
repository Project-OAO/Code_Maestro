// 방식은 다음과 같다.
// [-4, -3, -2, -1, 0, 1, 2, 5] 라 했을 때,
// 왼쪽 끝과 오른쪽 끝에서 시작한다.
// -4를 고정해두고, 5, 2, 1을 차례로 더해가는데 2를 더하는 순간 -2로, 2와 같다.
// 이렇게 되면 굳이 왼쪽으로 더 진행할 필요가 없다.
// 그러면 2를 고정하고 -4 다음인 -3 부터 다해간다. 그러다가 0이 되면 반환
// 아니면 +가 되는 값이 나오면 다시 왼쪽을 바꾼다.

function sumZero(arr) {
  // 왼쪽, 오른쪽 인덱스 할당
  let left = 0;
  let right = arr.length - 1;

  // 아래 과정을 반복
  // 왼쪽 값을 그대로 둔 채 right를 -1 씩 감소하면서 값 비교
  // 오른쪽 값을 그대로 둔 채 left를 +1 씩 증가하면서 값 비교
  // 만약 left = right -1 일 경우 없는걸로 판단하고 중단.

  while (left + 1 !== right) {
    if (arr[left] + arr[right] === 0) return [arr[left], arr[right]];

    if (-arr[left] < arr[right]) {
      right -= 1;
    } else left += 1;
  }

  return undefined;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(
  sumZero([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
);
console.log(
  sumZero([
    -26, -25, -24, -23, -11, -10, -9, -8, -7, -6, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 28,
  ]),
);
