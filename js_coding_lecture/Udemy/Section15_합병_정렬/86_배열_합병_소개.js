function merge(arr1, arr2) {
  const mergedArr = [];
  if (arr1[0] > arr2[0]) {
    mergedArr.push(arr2[0]);
    mergedArr.push(arr1[0]);
  } else {
    mergedArr.push(arr1[0]);
    mergedArr.push(arr2[0]);
  }

  return mergedArr;
}

// function merge2(arr1, arr2) {
//   const mergedArr = [];
//   let i = 0; // arr1 Index
//   let j = 0; // arr2 Index
//   while (true) {
//     if (i === arr1.length) {
//     }
//
//     if (arr1[i] >= arr2[j]) {
//       mergedArr.push(arr2[j]);
//       j += 1;
//     } else {
//       mergedArr.push(arr1[i]);
//       i += 1;
//     }
//   }
//
//   return mergedArr;
// }

console.log(merge([2], [1]));
console.log(merge2([1, 2], [3, 4]));
