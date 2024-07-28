/*
    1. 정수 배열의 이진법으로 변환해서, 이진법 배열로 변환
    2. 이진법 배열의 각 인덱스끼리 or 연산
    3. 1을 #으로 0을 공백으로 치환해서 반환
*/

function solution(n, arr1, arr2) {
  const binArr1 = arr1.map(v => parseInt(v.toString(2), 10));
  const binArr2 = arr2.map(v => parseInt(v.toString(2), 10));
  const data = binArr1.map((v, i) => v + binArr2[i]);

  const binArr = data.map((v) => {
    const tmp = v.toString(10);
    const tmp2 = tmp.padStart(n, '0');
    return tmp2;
  });

  const result = binArr.map(v => v.replace(/[1-9]/g, '#').replace(/[0]/g, ' '));

  return result;
}

// 처음 풀이는 위와 같은데, 자바스크립트도 비트연산이 된다는 것을 간과하고 있었다.
// 비트 연산을 알자마자 아래와 같이 쉽게 풀 수 있었다.

function solution2(n, arr1, arr2) {
  return arr1.map((v, i) => (v | arr2[i]).toString(2).padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' '));
}