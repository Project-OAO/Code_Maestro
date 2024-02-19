// 강사님께서 알려주신 방법을 바탕으로 구현해보기

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
}

console.log(bubbleSort([1, 5, 3, 4, 2]));
