/*
 * Input : 문자열, 문자열
 * output : Boolean(true / false)
 * 단어를 구성하는 문자들이 특정 문자에 순서대로 다 나오는지 체크하는 문제
 * */

function isSubsequence(str1, str2) {
  // 정규 표현식으로 구하려고 하다가, 적절하지 않은 듯 해서 방법 우회.
  // 원래 목적인 다중 포인터 방식으로 구해보고자 한다.
  // 결국 str1에 있는 문자들이 하나하나 순서대로 나오기만 하면 된다.

  // 인덱스들을 조건에 맞춰서 하나씩 +하는 방향으로 구하면 될 듯 하다.
  let str1Index = 0;

  // 결국 다중 포인터의 핵심은 하나의 for문 안에서 조건에 맞춰서 다른 하나도 순회시키는 것.
  for (let str2Index = 0; str2Index < str2.length; str2Index += 1) {
    if (str1Index === str1.length - 1 && str1[str1Index] === str2[str2Index])
      return true;
    if (str1[str1Index] === str2[str2Index]) str1Index += 1;
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
