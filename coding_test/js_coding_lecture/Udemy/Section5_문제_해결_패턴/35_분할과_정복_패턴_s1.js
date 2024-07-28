// 강사님이 푸신 방법
function binSearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const cur = arr[mid];

    if (cur < target) min = mid + 1;
    else if (cur > target) max = min - 1;
    else return mid;
  }

  return -1;
}
