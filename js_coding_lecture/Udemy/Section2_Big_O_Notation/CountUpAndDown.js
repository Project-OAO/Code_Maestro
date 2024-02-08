function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }

  console.log('At the top!\nGoing Down...');
  for (let j = n - 1; j >= 0; j -= 1) {
    console.log(j);
  }

  console.log('Back down. Bye!');
}
