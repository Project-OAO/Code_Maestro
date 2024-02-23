function compareRadix(num, radix, base = 10) {
  let result = num;
  for (let i = 0; i < radix - 1; i++) {
    result = Math.floor(result / base);
  }

  return result % base ? result % base : 0;
}

function emptyBucket(bucket) {
  const keys = Object.keys(bucket);
  const result = [];

  for (let i = 0; i < keys.length; i++) {
    result.push(...bucket[keys[i]]);
  }

  return result;
}

function radixSort(arr, radix, base = 10) {
  const bucket = {};
  for (let i = 0; i < arr.length; i++) {
    const remain = compareRadix(arr[i], radix);
    bucket[remain] ? bucket[remain].push(arr[i]) : (bucket[remain] = [arr[i]]);
  }

  if (Object.keys(bucket).length <= 1) return emptyBucket(bucket);
  return radixSort(emptyBucket(bucket), radix + 1);
}

console.log(compareRadix(1345, 1));
console.log(emptyBucket({ 1: [11, 121, 131, 141], 2: [22, 232, 242, 252] }));
console.log(radixSort([9, 123, 111, 10, 43, 89, 5, 77, 9543], 1));
