// Lim, Jaedo a.k.a. OAO
// 11NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 코딩테스트 이전에, 그냥 프로그램이 하듯이 짜보았다. 아직까지는 머리가 잘 돌아가지 않아서 복잡하게 밖에 못짜는듯.
function calculateGap(num1, num2) {
  return num1 - num2;
}

function makeGapArray(array, n) {
  return array.map(e => calculateGap(e, n));
}

function findSmallestGap(array, n) {
  let min = Math.abs(array[0]);
  let index = 0;

  array.forEach((e, i) => {
    if (Math.abs(e) < min) {
      index = i;
      min = Math.abs(e);
    } else if (Math.abs(e) === min) {
      if (e < min) index = i;
    }
  });

  return index;
}

function solution(array, n) {
  const gapArray = makeGapArray(array, n);
  const minIndex = findSmallestGap(gapArray, n);

  return array[minIndex];
}
