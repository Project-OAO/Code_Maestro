// 조금 더 좋은 풀이로 풀어보자.
function flatten(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) newArr.concat(arr[i]);
    else newArr.push(arr[i]);
  }

  return newArr;
}
