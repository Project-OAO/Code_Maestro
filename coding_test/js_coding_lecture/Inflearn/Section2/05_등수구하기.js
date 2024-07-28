/*
----설계----

[입력]
점수의 배열이 입력된다.

[출력]
각 학생의 등수를 입력된 순서대로 배치한다.

[로직]
등수를 따로 구해야 한다.
객체를 하나 선언해서 각 학생에 대한 등수를 정한다.
핵심은 등수를 어떻게 매핑할 것이냐인데, 분해해서 생각해보자.
1. 등수를 구한다.
2. 구한 등수를 놓고 보니, 점수도 정렬이 되어 있다.
3. 객체를 생성해서 점수와 등수를 점수:등수 쌍으로 매핑한다.
4. 입력받은 배열에서 그대로 등수만을 출력한다.
*/

const answer = (input) => {
  const ordered = [...input].sort((a, b) => b - a);
  const map = {};

  ordered.forEach((v, i) => {
    map[v] = i + 1;
  });

  return input.map(v => map[v]);
};

const solution = (input) => {
  const answer = Array.from({length: input.length}).fill(1);

  input.forEach((v, i) => {
    for (let j = 0; j < input.length; j++) {
      if (v < input[j]) answer[i]++;
    }
  });

  console.log(answer);
};

console.log(solution([87, 89, 92, 100, 76]));

// 강사님은 2중 for문으로 앞에서부터 하나씩 더해지면서 하는 방식으로 구했다.
// 내 코드는 문제가 있는게 같은 등수를 구할 수 없다. 그렇기에 걍 배열 2개를 선언해서 2중 반복문을 도는게 훨씬 이득이다.