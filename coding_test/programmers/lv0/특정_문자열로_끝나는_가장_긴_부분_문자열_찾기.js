// Lim, Jaedo a.k.a. OAO
// 11NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 이번건 쉽게 구할 수 있었다. 결국은 어떻게 추상화를 시키느냐의 문제인 듯 하다.
function solution(myString, pat) {
  const index = myString.lastIndexOf(pat);
  return myString.slice(0, index + pat.length);
}
