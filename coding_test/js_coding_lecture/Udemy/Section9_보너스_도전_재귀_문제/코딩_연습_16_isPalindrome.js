/*
외부에서 검사를 하는 방식으로, helper method recursive를 이용하는 방식이다.
외부 로직은 주어진 str이 reverse된 str과 같은지 검사하기만 하면 된다.
내부 함수는 reverse 시키면 되는데, 이는 앞에서 진행하였으므로 해보자.
 */

function isPalindrome(str) {
  function reverse(string) {
    if (string.length <= 0) return '';
    return reverse(string.slice(1)) + string[0];
  }

  return str === reverse(str);
}
