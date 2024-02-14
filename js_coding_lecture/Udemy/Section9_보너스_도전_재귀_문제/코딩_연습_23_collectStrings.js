function collectStrings(obj) {
  if (Object.keys(obj).length === 0) return [];

  let newArr = [];
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      newArr.push(obj[key]);
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newArr = newArr.concat(collectStrings(obj[key]));
    }
  }

  return newArr;
}
