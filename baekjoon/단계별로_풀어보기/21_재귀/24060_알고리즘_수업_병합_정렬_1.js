// Merge Sort에 대한 코드를 먼저 작성해야 한다.
// 병합 정렬의 경우에는 우선 2개의 요소가 필요하다.
// 1. 두개의 배열을 입력받아서 둘을 합치고 정렬한 값을 리턴한다.
// 2. 배열을 쪼개는 요소

let count = 0;
let answer = 0;

const mergeArray = (arr1, arr2, target) => {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i += 1;
      count += 1;
      if (count === target) {
        answer = result[result.length - 1];
      }
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j += 1;
      count += 1;
      if (count === target) {
        answer = result[result.length - 1];
      }
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i += 1;
    count += 1;
    if (count === target) {
      answer = result[result.length - 1];
    }
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j += 1;
    count += 1;
    if (count === target) {
      answer = result[result.length - 1];
    }
  }

  return result;
};

// 머지 소트의 과정
// 배열을 쪼갠다.
// 다시 배열을 쪼갠다.
// 쪼개고 남은 배열이 1개인 경우 합친다.

const mergeSort = (array, target) => {
  const mid = Math.ceil(array.length / 2);
  const arr1 = array.slice(0, mid);
  const arr2 = array.slice(mid, array.length);

  if (array.length === 1) return array;
  return mergeArray(mergeSort(arr1, target), mergeSort(arr2, target), target);
};

const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();

const [line1, line2] = input.split('\n');
const data = line2.split(' ').map(v => Number(v));
const target = Number(line1.split(' ')[1]);

mergeSort(data, target);

console.log(count < target ? -1 : answer);

