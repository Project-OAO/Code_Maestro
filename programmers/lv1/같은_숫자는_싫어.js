function solution(arr) {
  const data = [arr[0]];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] !== arr[i - 1]) data.push(arr[i]);
  }

  return data;
}