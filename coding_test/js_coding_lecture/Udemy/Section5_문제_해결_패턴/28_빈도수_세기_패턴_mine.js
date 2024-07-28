// 이게 Frequency Counter :: 강사님이 푼 방식과 동일하다.
function same(arr1, arr2) {
  const arr1Freq = {};
  const arr2Freq = {};

  // arr1의 빈도수를 알아야한다.
  for (const data of arr1) {
    arr1Freq[data] = ++arr1Freq[data] || 1;
  }

  // arr2의 빈도수를 알아야한다.
  for (const data of arr2) {
    arr2Freq[data] = ++arr2Freq[data] || 1;
  }

  // 길이가 같은 지 확인한다.
  if (Object.keys(arr1Freq).length !== Object.keys(arr2Freq).length) {
    return false;
  }

  // arr1의 제곱한 값들이 전부 arr2에 존재하는지를 알아야한다.
  // 둘이 같은 빈도수인지도 알아야 한다.
  let powData;
  for (const data in arr1Freq) {
    powData = data ** 2;
    if (!arr2Freq[powData] || arr1Freq[data] !== arr2Freq[powData]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [1, 5, 9]));
console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 2, 3], [1, 5]));
console.log(same([1, 2, 3, 3], [1, 4, 9, 9]));
console.log(same([1, 2, 3, 3], [1, 4, 9]));
