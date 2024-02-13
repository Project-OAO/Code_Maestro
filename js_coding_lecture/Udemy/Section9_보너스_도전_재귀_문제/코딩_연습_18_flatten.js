function flatten(arr) {
  if (arr.length === 0) return [];

  if (!Array.isArray(arr[0])) return [arr[0]].concat(flatten(arr.slice(1)));

  const tmp = arr[0];
  arr.shift();
  arr.unshift(...tmp);

  return flatten(arr);
}
