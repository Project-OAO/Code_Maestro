// 이전에 푼게 잘 안풀려서 다른 방법으로 접근하기 위해서 도전해본 풀이

function findLogestSubstring(str) {
  let start = 0;
  let end = 1;
  const longestLength = 0;
  let length = 0;
  let dupI = Number.MAX_SAFE_INTEGER;

  while (start < str.length) {
    // 지금부터 푸는 방식은 단계를 나눠서 차근차근 접근한다.
    // 처음에 start부터 시작해서 end를 1씩 늘려서 중복되는 지점까지 확인을 한다.
    // 다음의 경우를 고려해야 한다. (아래의 경우의 length는 다음으로 넘어갈때 이전을 더하는것.)
    // 1. 끝까지 이동했는데도 중복이 없는 경우
    //  중복이 없는 경우는 start를 1 옮기고, length에 +1을 더한다.
    // 2. 중복이 있는 경우
    //  중복이 위치한 인덱스를 dupI에 저장한다.
    //    이때, dupI에 있는 값과 비교해서 더 작은 값을 저장한다.
    //  dupI에 저장된 값을 이용해서 경우의 수를 생각해야 한다.
    //  조건을 덧붙여야 한다. start < dupI 인 경우이다.
    //  start < dupI 인 경우만 length +1 을 한다.
    //  start === dupI 인 경우는 start = dupI가 되고, 여기서부터 다시 시작한다. 즉, length도 초기화 한다.
    //  비교해서 LagerstNumber에 저장한다.
    // 순서는 중복 검사를 먼저 한다. -> 중복이 아닐 경우 / 중복인 경우에 대해서 분기를 한다.

    // 중복에 대한 비교
    if (str[start] === str[end]) {
      dupI = Math.min(dupI, end);
    }

    // 1칸씩 진행하는 조건 (해당 문자열에 대해서 중복되는 부분이 있으면, 거기까지를 마지노선으로 한다.)
    if (end < dupI - 1 || end < str.length - 1) {
      end += 1;
    } else if (end === dupI || end === str.length - 1) {
      start += 1;
      length += 1;
      end = start + 1;
    }
  }
}
