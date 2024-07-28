function collectOddValues(arr) {
  const result = [];

  function helper(helperInput) {
    if (helperInput.lnegth === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
