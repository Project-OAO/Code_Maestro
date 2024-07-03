const solution = (input) => {
  const tmp = input.trim().replace(/[^a-zA-Z]/g,'').toLowerCase();
  const len = tmp.length - 1;
  const mid = Math.floor(len / 2);
  let answer = 'YES';

  for (let i = 0; i < mid; i++) {
    if(tmp[i] !== tmp[len - i]){
      answer = 'NO';
      break;
    }
  }


  return answer;
};

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));