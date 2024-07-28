const solution = (input) => {
  const enrole = {};


  for (let i = 65; i < 70; i++) {
    enrole[String.fromCharCode(i)] = 0;
  }

  const tmp = input.split('');

  tmp.forEach(v => {
    enrole[v]++;
  });

  let max = Number.MIN_SAFE_INTEGER;
  let result = '';


  for (const key in enrole) {
    if (Math.max(max, enrole[key]) !== max) {
      max = Math.max(max, enrole[key]);
      result = key;
    }
  }

  return result;
};

console.log(solution('BACBACCACCBDEDE'));

// 강사님은 문제에서 Map을 사용했다. 그런데, 내 생각에는 굳이 Map을 사용할 필요가 없이, Object를 사용해도 될 것 같았다.
// Map과 Object의 차이점은, Map은 좀 더 다양한 형태의 key 자료형을 제공하고, Object는 오직 문자열만 키 값으로 사용할 수 있다.