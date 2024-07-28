// input : 정수 배열과 숫자
// output : 최대 합
// 문제에 대한 이해 : 숫자가 주어졌을 때, 정수 배열을 숫자대로 끊어서 합한 후 최대값 반환.
// 예외 : 주어진 숫자보다 작을 경우 null 반환

// 아래의 방식은 naive solution -> 매우 비효율적인 방법
// 그러면 어떻게? 그게 슬라이딩 우니도우 접근법이다.

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + num; j++) {
      sum += arr[j];
    }

    if (max < sum) max = sum;
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
