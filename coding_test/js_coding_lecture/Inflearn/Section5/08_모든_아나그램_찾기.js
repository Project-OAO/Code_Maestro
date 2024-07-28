const solution = (input1, input2) => {
  const leng = input2.length;

  let slideWindow = input1.slice(0,leng);

  const checkAnagram = (str1, str2) => {
    const tmp =  {};

    str1.split('').forEach(v => {
      !tmp[v] ? tmp[v] = 1 : tmp[v] += 1;
    });

    const tmp2 = str2.split('');

    for (let i = 0; i < str2.length; i++) {
      if(!tmp[tmp2[i]] || tmp[tmp2[i]] <= 0) return false;
    }

    return true;
  }

  let answer = 0;

  if(checkAnagram(slideWindow, input2)) {
    answer += 1;
  }

  for (let i = leng; i < input1.length; i++) {
    slideWindow = slideWindow.slice(1, leng) + input1[i];

    if(checkAnagram(slideWindow, input2)) {
      answer += 1;
    }
  }

  return answer;
};

console.log(solution('bacaAacba', 'abc'));

// 재귀로도 구현할 수 있다.
// 항상 재귀는 종료조건을 선별하고, 그 안에서 어떻게 반복이 될 것이며, 어떻게 리턴이 될 것인지를 설계하면 된다.
// 반복문을 사용했으면 재귀도 종종 사용할 줄 알아야 한다.
// 그래야 여러 상황에서 대응할 수 있다. 어느 하나의 생각에 갇히지 말자.

// 내가 짠 코드가 좋은 코드인가?
// 아니다. 이중 반복문을 돈다.
// 어떻게 했어야 했는가?
// 슬라이딩 윈도우 기법이지 않은가? 앞 뒤로 추가되는 값에 있어서, 그 값만 비교하면 되지 않았을까 싶다.
// 그러면 아래와 같이 풀 수 있지 않을까?

const solution2 = (input1, input2) => {
  const arr1 = {};
  const arr2 = {};

  let slicedWindow = input1.slice(0,input2.length);

  input2.split('').forEach(v => {
    !arr2[v] ? arr2[v] = 1 : arr2[v] += 1;
  });

  slicedWindow.split('').forEach(v => {
    !arr1[v] ? arr1[v] = 1 : arr1[v] += 1;
  });

  let flag = false;

  const checkAnagram = () => {
    for (let key in arr2) {
      if (arr2[key] !== arr1[key]) return false;
    }
    return true;
  };

  let result = 0;

  flag = checkAnagram();

  if (flag) {
    result += 1;
  }

  for (let i = input2.length; i < input1.length; i++) {
    const first = slicedWindow[0];
    slicedWindow = slicedWindow.slice(1) + input1[i];

    if (!flag || first !== input1[i]) {
      arr1[first] -= 1;
      !arr1[input1[i]] ? arr1[input1[i]] = 1 : arr1[input1[i]] += 1;

      if (arr1[first] <= 0) delete arr1[first];

      flag = (flag || first === input1[i]) ? false : checkAnagram();
    }

    if (flag) result += 1;
  }

  return result;
};

console.log(solution2('bacaAacba', 'abc'));

// 하나 더 배웠다. 이런 경우, 사전에 미리 하나를 덜 추가하면 그냥 for 문 안에서 한방에 해결이 가능하다.