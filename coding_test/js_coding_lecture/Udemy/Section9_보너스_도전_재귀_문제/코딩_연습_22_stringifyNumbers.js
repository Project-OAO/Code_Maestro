// 재귀의 소규모 함수는 순회 이전에, 하나의 역할을 수행한다.
// 이 경우는 객체를 탐색하고 -> 객체의 key중 value가 숫자인걸 문자화한다.
function stringifyNumbers(object) {
  const obj = {};

  for (const key in object) {
    if (typeof object[key] === 'number') {
      obj[key] = object[key].toString();
    } else if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
      obj[key] = stringifyNumbers(object[key]);
    } else {
      obj[key] = object[key];
    }
  }

  return obj;
}
