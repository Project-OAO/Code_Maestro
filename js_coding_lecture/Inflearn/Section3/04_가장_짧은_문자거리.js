const solution = (input) => {
  const tmp = input.split(' ');

  const eloc = tmp[0].split('').map(((v, i) => {
    if (v === input[1]) return i;
    return null;
  })).filter(v => v !== null);

  const answer = [];

  for (let i = 0; i < tmp[0].length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < eloc.length; j++) {
      const tmp2 = Math.abs(eloc[j]-i);
      if (min > tmp2) min = tmp2;
    }

    answer.push(min);
  }

  return answer;
};

console.log(solution('teachermode e'));

// 문제가 이해가 안될 경우 입력을 보고, 어떻게 출력이 나왔을지에 대해서 추론을 해봐야 한다.
// 입력분석 -> 출력 분석 -> 로직 설계(즉, 어떻게 이렇게 나왔는지 추론) -> 유사 문제에 끼워맞추기
// 최대한 단순하게 생각해보는 게 좋다. 그리고 사례를 최대한 나열을 해서 하드코딩에서 시작하는 것도 좋다.