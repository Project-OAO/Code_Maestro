// 강의를 전부 수강한 이후에 직접 구현해보는 퀵 정렬
function pivot(arr, start = 0, end = arr.length - 1) {
  const standard = arr[start];
  let pivot = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < standard) {
      pivot += 1;
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
    }
  }

  [arr[start], arr[pivot]] = [arr[pivot], arr[start]];

  return pivot;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([3, 4, 1, 9, 10, 100, 11, 53, 49, -1, -2, -3]));
