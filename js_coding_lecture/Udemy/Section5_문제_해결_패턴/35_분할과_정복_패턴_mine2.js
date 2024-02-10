// 이번엔 이진탐색을 이용해서 구현한다.
// 이진탐색의 핵심은 처음, 중간, 끝. 이거고, 중간을 어디에 둘 것인지, 구간을 정하는게 핵심이다.

function binSearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;
  let mid = Math.ceil(last / 2);

  while (mid < last) {
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      first = mid;
      mid = Math.ceil((first + last) / 2);
    } else {
      last = mid;
      mid = Math.ceil((first + last) / 2);
    }
  }

  return -1;
}

console.log(binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
console.log(binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
