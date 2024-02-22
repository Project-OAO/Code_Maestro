// 새로운 배열을 생성하지 않고 인덱스를 리턴하라고 해서 수정.
/*
먼저 구현해야하는 목록을 적어보자.

- Pivot으로 삼을 값을 정한다. (이 경우에서는 제일 처음 인덱스인 0)
- Pivot의 다음 값부터 시작해서, Pivot의 값과 비교한다.
  - 만약 Pivot의 값보다 작으면 1번 인덱스부터해서 하나씩 교환한다. (이 인덱스를 minPoint 라 하자)
    - minPoint는 이 과정이 시작되기 전에 +1이 된다. (정확히 제일 작은 값의 마지막 부분을 가리키고 있어야함.)
  - 만약 Pivot의 값보다 크면 그대로 둔다.
- 위의 과정이 끝나면, minPoint의 위치와 Pivot을 교환한다.
- 해당 배열을 리턴한다.

내가 고민하고 있는 부분
- 배열을 새로 생성하는게 좋은가? (깊은 복사 이용), 아니면 있는 배열을 변화시켜야 하는가?
  - 항상 구현은 return이 있다고 한다면, 최대한 원본 배열을 건드리지 않는 선에서 해보자.
  - 그리고 일단 구현을 먼저 하자.
 */

function pivotHelper(pivotedArr, pivot) {
  // const pivotedArr = [...arr];
  let minPoint = 0;

  for (let i = 0; i < pivotedArr.length; i += 1) {
    if (minPoint === pivot) {
      minPoint += 1;
    }

    if (pivotedArr[pivot] > pivotedArr[i]) {
      [pivotedArr[minPoint], pivotedArr[i]] = [
        pivotedArr[i],
        pivotedArr[minPoint],
      ];
      minPoint += 1;
    }
  }

  if (minPoint === 0 || minPoint < pivot) {
    [pivotedArr[minPoint], pivotedArr[pivot]] = [
      pivotedArr[pivot],
      pivotedArr[minPoint],
    ];
  } else if (minPoint > pivot) {
    [pivotedArr[minPoint - 1], pivotedArr[pivot]] = [
      pivotedArr[pivot],
      pivotedArr[minPoint - 1],
    ];

    minPoint -= 1;
  }

  console.log(`${pivotedArr}`);
  return minPoint;
}

console.log(pivotHelper([3, 7, 5, 4, 1], 0)); // 3, 1, 4, 5, 7;
console.log(pivotHelper([1, 3, 5, 4, 7], 1));
console.log(pivotHelper([1, 3, 5, 4, 7, -1, -2, -3, -4, -5], 0));
