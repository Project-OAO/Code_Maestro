function findHalfIndex(start, end) {
  return Math.floor(Math.ceil((start + end) / 2));
}

function sumZero(arr) {
  // 풀이 방법은 두가지 접근법으로 접근한다
  // 하나는 제일 앞부터 순회한다.
  // 다른 하나의 쌍을 찾는 부분은 절반을 잘라서 거기서부터 순회한다.
  let first = 0;
  let second = findHalfIndex(first, arr.length);
  let tmp = arr.length - 1;

  // 둘이 더했을 때 0보다 크면 뒤를 버리고, 나머지 반절에서 반복한다.
  // 둘이 더했을 때 0보다 작으면 뒤에서 반을 자르고 거기서부터 시작한다.
  // 어째 이진탐색 방법이랑 비슷하다?
  // 중간 지점 찾기
  //     이를 b에 넣는다.
  // 앞에서 부터 순회하는 반복 문 구현 -> a와 b를 구현하고, a와 b는 각각 인덱스를 가리킨다. a > b 이면 중단.
  //     이때, a = 0, b = 중간 인덱스
  //     a + b > 0 인지 확인, 맞으면 b 는 다시 앞의 인덱스 찾아서 대입
  //     아닐경우에는, 뒤를 자른다.
  //     a + b = 0이 될때까지 하고, 만약 a > b 이면 다음 차례로 넘기기.

  // 실패 조건
  if (arr[first] > 0) return undefined; // 여기서 반복의 조건이 나온다. arr[first]가 > 0 이고, arr[second]가 < 0 인 경우.

  while (arr[first] <= 0 && arr[second] >= 0) {
    // 문제의 조건 달성
    if (arr[first] + arr[second] === 0) return [arr[first], arr[second]];

    if (tmp <= second) {
      first += 1;
      second = findHalfIndex(first, arr.length);
      tmp = arr.length - 1;
    }

    if (arr[first] + arr[second] > 0) {
      tmp = second;
      second = findHalfIndex(first, tmp);
    } else if (arr[first] + arr[second] < 0) {
      second = findHalfIndex(second, tmp);
    }
  }

  return undefined;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(
  sumZero([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
);
console.log(
  sumZero([
    -26, -25, -24, -23, -11, -10, -9, -8, -7, -6, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 28,
  ]),
);
