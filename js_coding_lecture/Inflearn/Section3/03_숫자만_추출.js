const answer = (input) => {
  const tmp = input.replace(/[a-zA-Z]/g, '');

  return Number(tmp);
};

console.log(answer('g0en2T0s8eSoft'));