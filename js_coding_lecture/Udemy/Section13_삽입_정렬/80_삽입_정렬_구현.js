function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([4, 3, 2, 1, 5, 7, -1]));
