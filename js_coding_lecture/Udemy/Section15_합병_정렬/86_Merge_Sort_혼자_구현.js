function mergeArray(arr1, arr2) {
  const mergedArray = [];
  let i = 0; // arr1's length
  let j = 0; // arr2's length

  for (; i < arr1.length && j < arr2.length; ) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i += 1;
    } else {
      mergedArray.push(arr2[j]);
      j += 1;
    }
  }

  if (i === arr1.length) {
    for (; j < arr2.length; j += 1) {
      mergedArray.push(arr2[j]);
    }
  } else if (j === arr2.length) {
    for (; i < arr1.length; i += 1) {
      mergedArray.push(arr1[i]);
    }
  }

  return mergedArray;
}

function mergeSort(arr) {
  // Base Case
  if (arr.length <= 1) {
    return arr;
  }

  const arr1 = arr.slice(0, Math.ceil(arr.length / 2));
  const arr2 = arr.slice(Math.ceil(arr.length / 2));

  console.log(`step : ${arr1} // ${arr2}`);

  return mergeArray(mergeSort(arr1), mergeSort(arr2));
}

console.log(mergeSort([7, 5, 3, 2, 9, 11]));
