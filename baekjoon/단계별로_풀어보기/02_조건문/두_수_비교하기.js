const fs = require('fs');

const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => parseInt(v, 10));

let result = '==';

if (A > B) result = '>';
else if (A < B) result = '<';

console.log(result);