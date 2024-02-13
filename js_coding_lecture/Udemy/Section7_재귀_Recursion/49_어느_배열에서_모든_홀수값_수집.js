function collectOdd(arr) {
  const oddArr = [];
  const i = 0;

  function catchOdd(array, index) {
    if (index === array.length) return null;

    if (array[index] % 2 === 1) {
      oddArr.push(array[index]);
    }

    catchOdd(array, index + 1);
  }

  catchOdd(arr, i);

  return oddArr;
}

console.log(collectOdd([1, 2, 3, 4, 5]));
