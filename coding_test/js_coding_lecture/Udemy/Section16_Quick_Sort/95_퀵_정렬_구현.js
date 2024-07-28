function pivot(arr, start = 0, end = arr.length - 1) {
  // 비교해야하는 첫 번째 값 (0 번 인덱스가 기준)
  const standard = arr[start];

  // return해야하는 pivot 값 구현
  let pivotI = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < standard) {
      pivotI += 1;
      [arr[pivotI], arr[i]] = [arr[i], arr[pivotI]]; // 구조 분해 할당
    }
  }

  // 마지막에 0번 인덱스랑 위치 바꾸기
  [arr[start], arr[pivotI]] = [arr[pivotI], arr[start]];

  console.log(`${arr}`);

  return pivotI;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
