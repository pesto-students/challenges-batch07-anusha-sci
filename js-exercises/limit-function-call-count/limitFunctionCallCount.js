const limitFunctionCallCount = (cb, maxCount) => {
  let callCounter = 0;
  return (...args) => {
    if (callCounter < maxCount) {
      callCounter += 1;
      return cb(...args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
