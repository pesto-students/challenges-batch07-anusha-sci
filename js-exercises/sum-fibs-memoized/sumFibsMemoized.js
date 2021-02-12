function sumFibs(num) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm = 0;
  let sum = 1;
  while (nextTerm <= num) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    if (nextTerm % 2 === 1 && nextTerm < num) {
      sum += nextTerm;
    }
  }

  return sum;
}

function cacheFunction(sumFibs) {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return cache[num];
    }
    cache[num] = sumFibs(num);
    return cache[num];
  };
}

export { sumFibs, cacheFunction };
