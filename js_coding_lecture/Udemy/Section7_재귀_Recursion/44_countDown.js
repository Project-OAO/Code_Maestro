function countDown(num) {
  if (num <= 0) {
    console.log('All Done!');
    return;
  }

  console.log(num);
  num -= 1;
  countDown(num);
}

console.log(countDown(5));
