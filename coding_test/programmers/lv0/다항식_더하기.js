// Lim, Jaedo a.k.a. OAO
// 24NOV2023 Friday
// Contact: ashgrayblue0@gmail.com

// 제스트 사용 및 직접 테스트 케이스 만들어서 테스트
// 정상 동작이 되지 않는데, 무엇이 문제일까...?
function solution(polynomial) {
  const separatedData = polynomial.split(' + ');
  const result = { expo: 0, num: 0 };

  separatedData.forEach(e => {
    /x/.test(e)
      ? (result.expo += parseInt(
          e.match(/[^x]/g) ? e.match(/[^x]/g).join('') : 1,
        ))
      : (result.num += parseInt(e));
  });

  if (result.expo !== 0 && result.num !== 0) {
    return result.expo === 1
      ? `x + ${result.num}`
      : `${result.expo}x + ${result.num}`;
  }

  if (result.expo === 0) {
    return `${result.num}`;
  }

  return result.expo === 1 ? 'x' : `${result.expo}x`;
}

export default solution;
