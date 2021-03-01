const allPromises = function promiseAll(promiseArgs) {
  return new Promise((resolve, reject) => {
    const resultArr = [];
    if (promiseArgs.length === 0) {
      resolve(resultArr);
    }
    for (let index = 0; index < promiseArgs.length; index++) {
      if (!(promiseArgs[index] instanceof Promise)) {
        promiseArgs[index] = Promise.resolve(promiseArgs[index]);
      }
      promiseArgs[index].then((x) => {
        resultArr[index] = x;
        if (resultArr.length === promiseArgs.length) {
          resolve(resultArr);
        }
      }).catch((x) => { reject(x); });
    }
  });
};

export { allPromises };
