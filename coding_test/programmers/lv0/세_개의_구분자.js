// Lim, Jaedo a.k.a. OAO
// 11NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 어떻게 코딩을 하는지 이제야 좀 감이 잡힐 듯 하다. 아주 작은 것 하나씩 구현하면 된다.
// 대신, 어떻게 그걸 구현할 것인지, 길을 보는게 훨씬 더 중요하다는 것을 알 수 있었다.
function separateString(string) {
  return string
    .replace(/[abc]/g, ' ')
    .split(' ')
    .filter(e => e !== '');
}

function solution(myStr) {
  const stringArray = separateString(myStr);

  return stringArray.length === 0 ? ['EMPTY'] : stringArray;
}
