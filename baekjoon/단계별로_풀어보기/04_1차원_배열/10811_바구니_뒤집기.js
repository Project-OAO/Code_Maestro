const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const arrSize = Number(input[0].split(' ')[0]);

const arr = Array.from({length: arrSize + 1}, (v, i) => i);

// 첫 번째 줄을 제외한 나머지 줄에 대해서만 처리합니다.
for (let k = 1; k < input.length; k++) {
  const [a, b] = input[k].split(' ').map(Number);

  const tmp = arr.slice(a, b + 1).reverse();

  for (let i = a, j = 0; i <= b; i++, j++) {
    arr[i] = tmp[j];
  }
}

// 처음 원소는 0이므로 이를 제외하고 출력합니다.
console.log(arr.slice(1).join(' '));
