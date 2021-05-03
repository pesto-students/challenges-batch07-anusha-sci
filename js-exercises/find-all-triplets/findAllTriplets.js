function findAllTriplets(arr, sum) {
  // if (arguments.length === 0) {
  //   throw new Error('Two positional arguments array of numbers and desired sum is missing');
  // }
  // if (typeof sum !== 'number') {
  //   throw new Error('Positional argument sum should be a number.');
  // }

  // if (Array.isArray(arr) === false) {
  //   throw new Error('Positional argument arr should be a array.');
  // }

  // if (arr.every((item) => item && typeof item === 'number') === false) {
  //   throw new Error('Positional argument arr should contain only numbers.');
  // }

  const arrSize = arr.length;
  if (!Array.isArray(arr) || arrSize <= 3 || typeof sum !== 'number') {
    throw new Error('Invalid Parameter');
  }
  for (const item of arr) {
    if (Number.isNaN(item)) {
      throw new Error('Invalid Parameter');
    }
  }
  const tripletsArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      for (let k = j + 1; k < arr.length; k += 1) {
        const sumOfTriplets = arr[i] + arr[j] + arr[k];
        if (sumOfTriplets === sum) {
          tripletsArr.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return tripletsArr;
}

export { findAllTriplets };
