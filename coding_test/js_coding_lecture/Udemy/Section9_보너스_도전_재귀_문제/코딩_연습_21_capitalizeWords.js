function capitalizeWords(wordArr) {
  if (wordArr.length === 0) return [];
  const newArr = [];

  newArr.push(wordArr[0].toUpperCase());

  return newArr.concat(capitalizeWords(wordArr.slice(1)));
}
