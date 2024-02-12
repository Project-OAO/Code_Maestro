// 굳이 꼭 2개만 순회해야한다는 필요는 없다.
// 다음과 같은 방법으로 구할 수 있지 않을까?
// 항상 먼저 풀이 방법을 생각하고, 텍스트로 적어본 후 코드 작성을 시작하자.
// 그렇지 않으면 길을 잃기 쉽다.
// 1. 처음부터 하나씩 진행하되, 중복되는 값을 만날 경우 해당 중복되는 위치를 저장해둔다.
//     그리고 처음 위치를 +1 해준다. 다시 진행 시작.
// 2. 다시 중복되는 위치를 만나면 해당 위치가 원래 적혀있던 위치보다 가까울 경우 기록한다.
// 3. 처음 위치를 다시 +1 해주고, 다시 진행 시작한다.
// 4. 처음 위치가 중복되는 위치와 만날 경우 longestLeng을 갱신한다.
// 5. 다시 진행한다.
// 6. 이를 끝 부분에 만날때까지 진행한다.

function findLongestSubstring(str) {
  let longestLength = Number.MIN_SAFE_INTEGER;
  let length = 0;
  let start = 0;
  let tmp = start;
  let end = start;
  let dupI = Number.MAX_SAFE_INTEGER;

  while (start < str.length) {
    // 하나씩 계속 증가하기
    if (end < str.length - 1) end += 1;
    else if (tmp < str.length - 2) {
      tmp += 1;
      end = tmp + 1;
      length += 1;
    }

    // 중복되는 위치 찾기
    if (str[tmp] === str[end]) {
      dupI = Math.min(dupI, end);
    }

    if (dupI <= tmp) {
      length = dupI - start;
      dupI = Number.MAX_SAFE_INTEGER;
      start += 1;
      tmp = start;
      end = start;
    }

    longestLength = Math.max(length, longestLength);
  }

  return longestLength === Number.MIN_SAFE_INTEGER ? 0 : longestLength;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));
console.log(findLongestSubstring('abcd'));
