// QuickSort를 이용해서 푼 문제
// 항상 무언가가 어렵다고 느껴지면 단계를 나눠서 Step by step으로 보자.
function pivot(arr, start = 0, end = arr.length - 1) {
  const standard = arr[start];

  let pivotI = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < standard) {
      pivotI += 1;
      [arr[i], arr[pivotI]] = [arr[pivotI], arr[i]];
    }
  }

  [arr[start], arr[pivotI]] = [arr[pivotI], arr[start]];

  return pivotI;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotI = pivot(arr, left, right);
    quickSort(arr, left, pivotI - 1);
    quickSort(arr, pivotI + 1, right);
  }

  return arr;
}

function doCommands(array, command) {
  const result = [];
  for (let i = command[0] - 1; i < command[1]; i++) result.push(array[i]);
  quickSort(result);
  return result[command[2] - 1];
}

function solution(array, commands) {
  return commands.map(v => doCommands(array, v));
}