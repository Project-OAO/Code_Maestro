// Lim, Jaedo a.k.a. OAO
// 11NOV2023 Saturday
// Contact: ashgrayblue0@gmail.com

function solution(myString) {
  let data = myString.replace(/[a-zA-Z]/g, ' ');
  data = data.split(' ').filter(e => e !== '');
  return data.reduce((acc, cur) => acc + Number(cur), 0);
}
