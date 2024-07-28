function bubbleSort(arr) {
  let flag = true;
  for (let i = arr.length; i > 0; i--) {
    if (flag === false) break;
    flag = false;
    for (let j = 0; j < i - 1; j++) {
      console.log(`${i} and ${j} : ${arr[j]}, ${arr[i]}, ${arr}`);
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    console.log('ONE STEP FINISH');
  }

  return arr;
}

console.log(bubbleSort([1, 5, 3, 4, 2]));
console.log(bubbleSort([1, 2, 3, 4, 5]));
console.log(bubbleSort([6, 1, 2, 3, 4, 5]));
