const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const inputArr = input[1].split(' ').map(Number);

// const inputArr = [20, 10, 35, 30, 7];

const findMax = (arr) => arr.reduce((acc, cur) => acc > cur ? acc : cur);
const findMin = (arr) => arr.reduce((acc, cur) => acc < cur ? acc : cur);

const max = findMax(inputArr);
const min = findMin(inputArr);

console.log(min, max);