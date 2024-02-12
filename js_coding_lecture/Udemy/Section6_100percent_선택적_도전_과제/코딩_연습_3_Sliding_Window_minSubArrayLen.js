/*
 * input : 양의 정수 배열, 숫자
 * output : 최소 배열의 길이
 * 문제의 조건 : 주어진 배열의 부분 배열의 합이 주어진 숫자를 넘을 때, 가장 작은 주어진 배열의 길이
 * 사고의 흐름
 *   1. 어떻게 합을 구할 것인가?
 *     - 처음부터 끝까지 주어진 숫자보다 커지는 순간까지 하나씩 더해간다. 이를 묶음 1 이라고 하자.
 *     - [묶음 1]에서 다음 인덱스를 하나만 더 더한다. 이를 [묶음 2]라고 하자.
 *     - [묶음 2]에서 앞의 인덱스를 하나씩 뺸다. val보다 작아지기 전까지만 뺸다.
 *     - 이를 반복한다.
 *     - 끝에 도달하거나 개수가 1일 경우에는 리턴한다.
 *   2. 어떻게 길이를 구할 것인가?
 *     - 길이는 합을 구할 때 빼면 -1, 더해지면 +1을 한다. length는 따로 두자.
 * */

function minSubArrayLen(arr, num) {
  if (arr.length === 0) return 0;

  let sum = 0;
  let len;
  let minLen;
  let index;

  for (index = 0; sum < num; index++) {
    sum += arr[index];
    if (index >= arr.length) return 0;
  }

  len = index;
  minLen = len;

  // 아래부분에서 상당시간 헤맸다.
  // 합도 작은데 index가 끝지점에 도달해있으면, 더 이상 무엇을 할 수 없기 때문에 종료.
  // window 개념으로 접근한다는 것을 기억하자.
  while (!(sum < num && index > arr.length - 1)) {
    // 부분의 합이 클 경우에는 window를 줄인다.
    if (sum >= num) {
      sum -= arr[index - len];
      len -= 1;
    } else {
      // 부분의 합이 작은 경우에는 다시 window를 늘린다.
      sum += arr[index];
      len += 1;
      index += 1;
    }

    // 사실 이 조건을 if (sum >= num) 안에 포함시켜도 된다. 결국 감소되었을 때 sum < num이면 이를
    // 길이로 생각하면 안되기 때문이고, 자연스럽게 if문이 아닌 else문을 겪게 되면서
    // 이에 맞춰서 처리되기 때문이다.
    if (sum >= num && minLen > len) minLen = len;
  }

  return minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
