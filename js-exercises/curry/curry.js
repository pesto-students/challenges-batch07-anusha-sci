function curry(fn) {
  return function inner(...args) {
    if (args.length < fn.length) {
      return (...moreargs) => {
        const totalArgs = args.concat(moreargs);
        return inner(...totalArgs);
      };
    }
    return fn(...args);
  };
}

export {
  curry,
};
