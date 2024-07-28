// Lim, Jaedo a.k.a. OAO
// 02DEC2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 테스트 9번이 안된다.. 뭐가 문제일까?
// 원인은 간단했따. findDuplicatiedAread에서 line1, line2가 변수로 주어지는데, 난
// line1 < line2만 생각했다. 그러나 line1 > line2가 주어지면 해당 식은 성립하지 않는다.
// 테스트코드에도 있지만, [[0, 3], [-3, -1], [-2, 3]] 기댓값 4 이를 실행시켜보면 바로 알 수 있다.
function solution(lines) {
  const dupLineList = [];
  let tmp = [];

  for (let i = 0; i < 2; i += 1) {
    for (let j = i + 1; j < 3; j += 1) {
      if (findDuplicatedArea(lines[i], lines[j]).length !== 0)
        dupLineList.push(findDuplicatedArea(lines[i], lines[j]));
    }
  }

  switch (dupLineList.length) {
    case 0:
      return 0;
    case 1:
      return dupLineList[0][1] - dupLineList[0][0];
    case 2:
      tmp = checkArea(dupLineList[0], dupLineList[1]);
      return tmp.length === 2
        ? tmp[0][1] - tmp[0][0] + tmp[1][1] - tmp[1][0]
        : tmp[0][1] - tmp[0][0];
    case 3:
      return checkTripple(dupLineList);
  }
}

function findDuplicatedArea(line1, line2) {
  const line = [...line1.concat(line2)].sort((a, b) => a - b);
  return line.join('') === [...line1.concat(line2)].join('') ||
    line.join('') === [...line2.concat(line1)].join('')
    ? []
    : [line[1], line[2]];
}

function checkArea(line1, line2) {
  const line = [...line1.concat(line2)].sort((a, b) => a - b);
  return line.join('') === [...line1.concat(line2)].join('') ||
    line.join('') === [...line2.concat(line1)].join('')
    ? [line1, line2]
    : [[line[0], line[3]]];
}

function checkTripple(dubLines) {
  const dubLine = [...dubLines[0].concat(dubLines[1]).concat(dubLines[2])].sort(
    (a, b) => a - b,
  );
  return dubLine[5] - dubLine[0];
}

export default solution;
