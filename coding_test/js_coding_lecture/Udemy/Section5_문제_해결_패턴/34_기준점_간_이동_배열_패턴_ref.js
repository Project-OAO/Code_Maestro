// 강의에서 내용을 참고해서, 강의코드 작성 전에 내가 짜본 코드.

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  let tmp = max;

  for (let i = num; i < arr.length; i++) {
    tmp = max - arr[i - num] + arr[i];
    max = Math.max(tmp, max);
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
