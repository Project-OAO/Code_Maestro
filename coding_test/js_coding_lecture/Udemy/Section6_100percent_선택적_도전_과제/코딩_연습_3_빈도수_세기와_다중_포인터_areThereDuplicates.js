// 가변적인 인수를 받아들인다. -> ... 연산자 이용한다. (배열로 들어온 변수들을 넘겨준다.)

// 전달된 인자 중 중복이 있는 지 확인하는 방법은 다음과 같다.
// 1. 빈도수 카운터 패턴에서 빈도수가 2가 되는 경우, 바로 out 해버리기.
// 2. 다중 포인터 방식에서, 하나씩 순회하면서 같은 값이 있는 경우 out 해버리기. 그렇게 n-1까지 순회하면 정지.

function areThereDuplicates(...args) {
  // 빈도수 카운터 패턴을 사용하자. 아무래도 이게 제일 익숙하니까.
  const count = {};
  for (const arg of args) {
    count[arg] = ++count[arg] || 1;
    if (count[arg] >= 2) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c'));
