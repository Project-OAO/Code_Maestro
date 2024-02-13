/*
문자열 뒤집기

결국 이것도 재귀를 사용하는 문제이다.

base case : 문자열이 없는 경우 -> '' 빈 문자 리턴
 */

function reverse(str) {
  if (str.length === 0) return '';
  return reverse(str.slice(1)) + str[0];
}
