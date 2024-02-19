// 삽입 정렬 구현
function insertionSort(arr) {
  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] >= arr[j]) break;
      swap(arr, j, j + 1);
    }
  }

  return arr;
}

console.log(insertionSort([4, 3, 2, 1, 5, 7, -1]));
