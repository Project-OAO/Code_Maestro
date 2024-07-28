const solution = (input1, input2) => {
  const data1 = {};
  const data2 = {};

  input1.split('').forEach(v => {
    if (!data1[v]) data1[v] = 1;
    else data1[v]++;
  });

  input2.split('').forEach(v => {
    if (!data2[v]) data2[v] = 1;
    else data2[v]++;
  });

  let result = 'YES';

  if (Object.keys(data1).length !== Object.keys(data2).length) result = 'NO';

  Object.entries(data1).forEach(v => {
    if(data2[v[0]] === undefined || data2[v[0]] !== v[1]) result = 'NO';
  });

  return result;
};

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));

// 나는 두개를 전부 객체에 할당해서 비교했는데, 강사님은 객체 하나만 할당하고, 거기의 값을 -- 하는 것으로 설정하였다.
// 그리고, 이 과정에서 하나씩 설정하였다.

// 근데, 답에 오류가 있다. 만약 처음이 뒤에것 보다 더 많은 값을 포함할 경우에는 필터링이 되지 않는다.
// 다만, 문제의 조건에 입력되는 값의 길이가 같다는 조건이 있으므로 이게 허용되는 이유이다.