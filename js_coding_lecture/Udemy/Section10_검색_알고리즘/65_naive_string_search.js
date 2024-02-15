function stringSearch(lstr, sstr) {
  let count = 0;
  for (let j, i = 0; i < lstr.length; i++) {
    for (j = 0; j < sstr.length; j++) {
      if (sstr[j] !== lstr[i + j]) break;
      else if (j === sstr.length - 1) count += 1;
    }
  }

  return count;
}
