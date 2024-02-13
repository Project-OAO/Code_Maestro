/*
base case : arr의 끝 지점에 도달했을 경우.
moving condition : arr의 첫 원소를 넘겨주고, 1씩 증가하면서 이동한다. (배열을 줄이는 방법 채택)
 */

function someRecursive(arr, callback) {
  function helper(array) {
    if (array.length === 0) return false;
    return callback(array[0]) || helper(array.slice(1));
  }

  return helper(arr);
}
