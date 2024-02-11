// 목표 평균에 해당하는 쌍이 있는 지 확인하는 문제
// input : 배열, 목표 평균
// output : true / false (쌍이 있는 경우 true)

// 핵심 키워드 : a+b / 2 = 목표 배열
// 다중 포인터를 어떻게 설계해서 O(n)이 되게 할 것인가?

function averagePair(arr, avg) {
  const target = avg * 2;
  // 처음부터 하나씩 돌려가다가, avg보다 커지느 순간이 오면 다시, 처음으로.
  let first = 0;
  let last = 1;

  while (first < arr.length - 1) {
    if (arr[first] + arr[last] === target) return true;
    if (arr[first] + arr[last] > target || last > arr.length - 1) {
      first += 1;
      last = first + 1;
    } else {
      last += 1;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
