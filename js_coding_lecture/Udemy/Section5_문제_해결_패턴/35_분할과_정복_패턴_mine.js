// 분할 정복 패턴 수업에서, 이진 검색 패턴을 배우기 전에 반복문을 통해 처음부터 끝까지 순회하는 것을 구현해보기.
// 배열은 정렬이 되어있다고 생각하고, 숫자만 찾는다.

function NaiveSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

console.log(NaiveSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
console.log(NaiveSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
