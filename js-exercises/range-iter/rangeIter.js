function rangeIter(startNum, endNum) {
  if (arguments.length === 0) {
    throw new TypeError('undefined is not a number');
  }

  if (typeof startNum !== 'number') {
    throw new TypeError('startNum is not a number');
  }

  if (typeof endNum !== 'number') {
    throw new TypeError('endNum is not a number');
  }

  return {

    [Symbol.iterator]() {
      let currentNum = startNum;
      return {

        next() {
          let obj;
          if (currentNum <= endNum) {
            obj = { done: false, value: currentNum };
            currentNum += 1;
            return obj;
          }
          return { done: true };
        },
      };
    },

  };
}

export { rangeIter };
