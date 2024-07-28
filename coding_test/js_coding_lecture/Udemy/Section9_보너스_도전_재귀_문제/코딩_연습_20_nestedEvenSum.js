function nestedEvenSum(obj) {
  const objKeys = Object.keys(obj);
  let sum = 0;
  for (let i = 0; i < objKeys.length; i++) {
    if (typeof obj[objKeys[i]] === 'object')
      sum += nestedEvenSum(obj[objKeys[i]]);
    if (obj[objKeys[i]] % 2 === 0) sum += obj[objKeys[i]];
  }

  return sum;
}
