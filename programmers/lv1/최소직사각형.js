// 항상 풀이 먼저 생각하자.
// 시간 복잡도를 한 번 생각해보아야 한다.
// 가로 세로를 놓고 보았을 떄, 만약 세로 > 가로 이면, 위치를 바꾼다. -> 시간복잡도가 O(n^2)이 될 것 같기도...?
// <구현 방안>
// 1. 크기에 따라서 arr을 스왑하는 기능을 먼저 구현한다.
// 2. 각 배열을 순회하면서 인덱스 0과 1 중 가장 큰 값을 maxWidth, maxHeight 변수에 저장한다.
// 3. 저장된 값을 곱해서 리턴한다.

function solution(sizes) {
  let maxWidth = Number.MIN_SAFE_INTEGER;
  let maxHeight = Number.MIN_SAFE_INTEGER;
  sizes.forEach(e => {
    swapWidthHeight(e);
    if (maxWidth < e[0]) maxWidth = e[0];
    if (maxHeight < e[1]) maxHeight = e[1];
  });
  return maxWidth * maxHeight;
}

// 사실 함수 오버로드까지 고려하면, 함수를 solution에 포함시키는 게 맞으나, 그렇게 구현을 할 경우에, 실제 사용할 때는 함수의 유지보수성만 낮아지기에 분리해서 구현. 성능이 중요하멶 합치자.
function swapWidthHeight(arr) {
  if (arr[0] < arr[1]) {
    const tmp = arr[0];
    arr[0] = arr[1];
    arr[1] = tmp;
  }
}
