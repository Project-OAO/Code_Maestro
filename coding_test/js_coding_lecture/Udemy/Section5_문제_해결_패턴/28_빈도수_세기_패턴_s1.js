// 강사님이 보여준 풀이 중 하나 (Naive Solution)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2); // indexOf 자체가 루프이다.
    if (correctIndex !== -1) return false;
    arr2.splice(correctIndex, 1);
  }

  return true;
}
