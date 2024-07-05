const solution = (input1, input2) => {
  const arr1 = input1.sort((a, b) => a - b);
  const arr2 = input2.sort((a, b) => a - b);

  const answer = [];

  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) i++;
    else if (arr1[i] > arr2[j]) j++;
    else {
      answer.push(arr1[i++]);
      j++;
    }
  }

  return answer;
};

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));