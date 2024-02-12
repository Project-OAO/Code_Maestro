// 앞서 강사님이 했던 문제를 스스로 한번 적어보는 시간

function findLongestSubstring(str) {
  let start = 0;
  const seen = {};
  let longestLength = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longestLength = Math.max(longestLength, i - start + 1);

    seen[char] = i + 1;
  }

  return longestLength;
}
