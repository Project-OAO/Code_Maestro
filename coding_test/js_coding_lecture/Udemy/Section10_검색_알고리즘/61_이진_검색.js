function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left < right) {
    mid = Math.ceil((left + right) / 2);
    if (val > arr[mid]) {
      left = mid + 1;
      mid = Math.ceil((left + right) / 2);
    } else if (val < arr[mid]) {
      right = mid - 1;
      mid = Math.ceil((left + right) / 2);
    } else {
      return mid;
    }
  }

  return arr[mid] === val ? mid : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 1));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10,
  ),
);
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95,
  ),
);
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100,
  ),
);
