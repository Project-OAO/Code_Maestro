/*
종료 조건 : 배열의 끝에 도달하였을 경우
과정 : 배열을 slice(1)해서 계속 값에 넣기
 */

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
