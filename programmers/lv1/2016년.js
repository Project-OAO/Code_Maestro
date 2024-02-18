function solution(a, b) {
  const week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let tmp = 0;
  for (let i = a - 1; i > 0; i--) {
    tmp += day[i - 1];
  }

  tmp += b;
  tmp %= 7;

  return week[tmp];
}
