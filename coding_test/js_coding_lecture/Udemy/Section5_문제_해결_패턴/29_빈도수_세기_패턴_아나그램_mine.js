function solution(str1, str2) {
  // 두 문자열의 길이가 같은지 확인
  if (str1.length !== str2.length) return false;

  const str1Freq = {};
  const str2Freq = {};
  // 문자열1의 빈도수 확인
  for (const val of str1) {
    str1Freq[val] = ++str1Freq[val] || 1;
  }

  // 문자열2의 빈도수 확인
  for (const val of str2) {
    str2Freq[val] = ++str2Freq[val] || 1;
  }

  // 두 문자열 빈도수 객체의 길이가 같은 지 확인
  if (Object.keys(str1Freq).length !== Object.keys(str2Freq).length)
    return false;

  // 문자열 1의 문자가 문자열 2에 속해있는 지 확인
  // 문자열 1의 문자의 빈도수가 문자열 2의 문자열 빈도수와 같은 지 확인
  for (const key in str1Freq) {
    if (!str2Freq[key] || str1Freq[key] !== str2Freq[key]) return false;
  }

  return true;
}

console.log(solution('', '')); // true
console.log(solution('aaz', 'zza')); // false
console.log(solution('anagram', 'nagaram')); // true
console.log(solution('rat', 'car')); // false
console.log(solution('awesome', 'awesom')); // false
console.log(solution('qwerty', 'qeywrt')); // true
console.log(solution('texttwisttime', 'timetwisttext')); // true
