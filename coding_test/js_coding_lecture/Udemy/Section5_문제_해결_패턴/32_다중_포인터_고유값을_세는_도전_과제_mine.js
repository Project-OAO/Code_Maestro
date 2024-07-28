// input : sorted array
// purpose : counts the unique values in array 즉, 등장한 수를 세는 문제
// output : number

function countUniqueValues(arr) {
  // 별거 없이 그냥 2개의 변수를 두고, left, right로 설정.
  // 배열을 순회하면서 left는 항상 right보다 인덱스 1 작은 값을 저장.
  // 둘이 달라지는 순간에 카운트를 +1 한다.
  let left;
  let right;
  let count = 1;

  if (arr.length === 0) count = 0;

  for (let i = 1; i < arr.length; i += 1) {
    left = arr[i - 1];
    right = arr[i];
    if (left !== right) count += 1;
  }

  return count;
}

console.log(countUniqueValues([1, 2, 3, 4, 5]));
console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 5, 5]));
console.log(countUniqueValues([1, 2, 2, 2, 2, 3, 4, 5]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
