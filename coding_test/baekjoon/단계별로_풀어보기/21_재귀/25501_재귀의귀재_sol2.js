// const fs = require('fs');
// const inputs = fs.readFileSync('/dev/stdin').trim().split('\n');

const inputs = `5
AAA
ABBA
ABABA
ABCA
PALINDROME`
  .trim()
  .split('\n');

const countPalindrome = (string) => {
  let count = 0;

  const palindrome = (string) => {
    count++;

    if (string.length <= 1) return 1;
    if (string[0] !== string[string.length - 1]) return 0;

    return palindrome(string.slice(1, string.length - 1));
  };

  return [palindrome(string), count];
};

inputs.slice(1).forEach((input) => {
  const [result, count] = countPalindrome(input);

  console.log(`${result}, ${count}`);
});
