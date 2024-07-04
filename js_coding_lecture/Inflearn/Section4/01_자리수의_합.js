// 섹션 4. 완전탐색(블루투포스) :: 1. 자리수의 합
const solution = (input) => {
  let answer = 0;
  let max = 0;

  input.forEach(v => {
    const len = v.toString().length;
    let tmp = v;
    let sum = 0;
    for(let i = 0; i < len; i++) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    };
    if (max < sum) {
      answer = v;
      max = sum;
    } else if (sum === max) {
      if(v > answer) answer = v;
    }
  });

  return answer;
};

console.log(solution([128, 460, 603, 40, 521, 137, 123]));