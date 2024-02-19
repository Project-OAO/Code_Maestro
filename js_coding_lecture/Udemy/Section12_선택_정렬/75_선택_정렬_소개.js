// 직접 한번 선택 정렬을 구현해보는 것.
// 선택 정렬은 구간에서 가장 작은 값을 두어서, 그 해당 구간의 시작점과 바꾸며 정렬하는 방식이다.
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;
    // flag를 두어서, 만약 정렬이 끝났으면 더 진행 안되게 수정
    let flag = false;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] <= min) {
        min = arr[j];
        minIndex = j;
        flag = true;
      }
    }

    if (!flag) break;

    if (i !== minIndex) {
      const tmp = arr[i];
      arr[i] = min;
      arr[minIndex] = tmp;
    }
  }

  return arr;
}

console.log(selectionSort([7, 3, 2, 5, 1, 4]));
console.log(selectionSort([1, 2, 3, 4, 5]));
