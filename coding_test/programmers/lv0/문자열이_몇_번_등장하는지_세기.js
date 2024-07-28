// Lim, Jaedo a.k.a. OAO
// 11NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

// 로직을 떠올리는데 오래걸렸다.
function solution(myString, pat) {
  let count = 0;
  let index = 0;

  while (true) {
    index = myString.indexOf(pat, index);

    if (index === -1) break;

    count += 1;
    index += 1;
  }

  return count;
}
