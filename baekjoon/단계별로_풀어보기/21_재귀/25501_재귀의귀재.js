// const fs = require('fs');

// 입력 조건
// 첫 줄에는 숫자
// 두 번째 줄 부터 구해야하는 값이 주어진다.
//
// const input = fs.readFileSync(0).toString();
//
// const [number, ...inputs] = input.split('\n');

// 앞과 뒤과 같은지 확인하는 함수
// 문자열의 앞과 뒤를 재귀적으로 반복해서 찾는다. 투포인터 방식으로 보이나, 투포인터를 재귀를 통해서 구하는 방식이다.


// 재귀가 맞다면 1, 아니라면 0을 출력하고, 이때 재귀가 돈 횟수를 카운트하면 된다.
// helper function을 사용하면 좋을 것 같다. -> 위의 recursion이 helper function이 된다.

const result = (num, strings) => {
  let count;

  const recursion = (string, left = 0, right = string.length - 1) => {
    count++;
    if (left >= right) return 1;
    if (string[left] !== string[right]) return 0;
    return recursion(string, left + 1, right - 1);
  };

  for (let i = 0; i < num; i++) {
    count = 0;
    const answer = recursion(strings[i]);
    console.log(`${answer} ${count}`);
  }
};

const [n, ...s] = [5,
  'AAA',
  'ABBA',
  'ABABA',
  'ABCA',
  'PALINDROME'];

// result(number, inputs);
result(n, s);
