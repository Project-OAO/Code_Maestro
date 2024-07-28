// 결국 답을 못찾아서, 답안지를 보았다.
// 내가 뭘 하고 있나 싶더라.
// 너무 편협되게 생각한 듯 하다.
// sliding window는 특정 방식을 공식처럼 말하는 것이 아니라, 그냥 문제 풀이 집단인데...
// 알고리즘을 공부하면서 제일 중요한 것을 내가 까먹고 있었다.

function findLongestSubString(str) {
  let longest = 0;
  const seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
}
