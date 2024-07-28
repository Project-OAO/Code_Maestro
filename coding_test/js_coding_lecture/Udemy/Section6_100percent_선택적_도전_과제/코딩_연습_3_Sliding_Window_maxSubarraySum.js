// 최대값을 정해놓고, 앞을 뺴고 뒤를 더하는 방식으로 순회하자.

function maxSubarraySum(arr, width) {
  if (arr.length < width) return null;

  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < width; i += 1) {
    sum += arr[i];
  }

  if (arr.length === width) return max;

  for (let i = 1; i < arr.length - width + 1; i += 1) {
    sum = sum - arr[i - 1] + arr[i + width - 1];
    if (max < sum) max = sum;
  }

  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
