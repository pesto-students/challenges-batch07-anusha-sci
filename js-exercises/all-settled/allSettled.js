function allSettled(promiseArgs) {
  return new Promise((resolve) => {
    const resultArr = [];
    if (promiseArgs.length === 0) {
      resolve(resultArr);
    }
    for (let index = 0; index < promiseArgs.length; index++) {
      if (!(promiseArgs[index] instanceof Promise)) {
        promiseArgs[index] = Promise.resolve(promiseArgs[index]);
      }
      promiseArgs[index].then((x) => {
        resultArr[index] = { status: 'fulfilled', value: x };
        if (resultArr.length === promiseArgs.length) {
          resolve(resultArr);
        }
      }).catch((x) => {
        resultArr[index] = { status: 'rejected', value: x };
        if (resultArr.length === promiseArgs.length) {
          resolve(resultArr);
        }
      });
    }
  });
}

export { allSettled };
