// Lim, Jaedo a.k.a. OAO
// 20OCT2023 FRIDAY
// Contacts: ashgrayblue0@gmail.com

// 자바스크립트에서 나눗셈을 했을 때, 내 예상처럼 결과가 안나오는 경우가 있어서 하나하나 Math.floor를 취해주었다.
// 별로 좋은 코드는 아니다.
function solution(price) {
  const highest = 500000;
  const middle = 300000;
  const smallest = 100000;

  if (Math.floor(price / highest) > 0) {
    return Math.floor(price * 0.8);
  } if (Math.floor(price / middle) > 0) {
    return Math.floor(price * 0.9);
  } if (Math.floor(price / smallest) > 0) {
    return Math.floor(price * 0.95);
  } 
  return price;
  
}
