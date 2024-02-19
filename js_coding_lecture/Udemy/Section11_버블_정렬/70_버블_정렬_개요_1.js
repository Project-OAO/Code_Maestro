// 버블 정렬이란, 앞에서부터 2개의 값을 비교해서, 더 큰 값을 뒤로 배치한다.
// 그리고 그게 끝에 도달하면, 그게 그 회차에서 제일 큰 값이니까, 끝 부분을 제외하고 다시 순회를 하는 방식으로 돌아간다.
// 크기가 arr.length면, for문을 돌릴 때 for i = 0 부터는 맞는데, 끝을 계속 줄여나가는 느낌?
// 보면 알겠지만, 반복과 swap이 같이 이루어진다.

// 아래도 따지고 보면 nested loop이다.
function bubbleSort(arr) {
  let end = arr.length - 1;
  let index = 0;
  while (end > 0) {
    if (index === end) {
      index = 0;
      end -= 1;
      continue;
    }

    if (arr[index] > arr[index + 1]) {
      const tmp = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = tmp;
    }

    index += 1;
  }

  return arr;
}

console.log(bubbleSort([1, 5, 3, 4, 2]));
