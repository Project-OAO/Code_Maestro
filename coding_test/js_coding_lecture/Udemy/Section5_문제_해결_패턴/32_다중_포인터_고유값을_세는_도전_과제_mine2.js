// 수업 중 재밌는 발상을 배웠다.
// 배열을 수정할 수 있다면, 인덱스를 count로 삼고, 하나씩 이동하는 것이다.
// 그리고 해당 index의 값에 다른 값을 저장하면, 나중에 필요에 따라서 slice를 제공하면 되는 것이다.

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let answer = 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[answer] !== arr[right]) {
      answer += 1;
      arr[answer] = arr[right];
    }
  }

  console.log(arr.slice(0, answer + 1));
  return answer + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 5]));
console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 5, 5]));
console.log(countUniqueValues([1, 2, 2, 2, 2, 3, 4, 5]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
