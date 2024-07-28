const findMaxCount = (money, arr) => {
  let sum = 0;
  let tmp = 0;
  let maxStudent = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > money) {
      if(tmp > maxStudent) maxStudent = tmp;
      tmp = 0;
      break;
    }
    tmp++;
  }

  return maxStudent;
};

const sortArr = (input) => {
  let arr = input.sort((a, b) => {
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];

    if (sumA < sumB) return -1;
    return 1;
  });

  return arr;
};

const deepCopyArray = (arr) => {
  return arr.map(item => Array.isArray(item) ? deepCopyArray(item) : item);
};

const solution = (money, input) => {
  let count = 0;

  for(let i = 0; i < input.length; i++) {
    const tmp = deepCopyArray(input);
    tmp[i][0] = tmp[i][0] / 2;
    const sortedArr = sortArr(tmp);
    const summedArr = sortedArr.map(v => v[0] + v[1]);
    const tmpCount = findMaxCount(money, summedArr);
    if(count < tmpCount) count = tmpCount;
  }

  return count;
};

console.log(solution(28, [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]]));