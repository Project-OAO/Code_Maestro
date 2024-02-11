function sameFrequency(num1, num2) {
  const num1Freq = {};
  const num2Freq = {};

  const n1 = num1.toString();
  const n2 = num2.toString();

  if (n1.length !== n2.length) return false;

  for (const s of n1) {
    num1Freq[s] = ++num1Freq[s] || 1;
  }

  for (const s of n2) {
    num2Freq[s] = ++num2Freq[s] || 1;
  }

  if (Object.keys(num1Freq).length !== Object.keys(num2Freq).length)
    return false;

  for (const key in num1Freq) {
    if (num1Freq[key] !== num2Freq[key]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
