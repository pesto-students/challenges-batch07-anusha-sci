function removeFalsyValues(array) {
  const falsyValuesArr = [null, undefined, NaN, 0, false, ''];
  const noFalsyArr = [];

  for (const item of array) {
    if (!falsyValuesArr.includes(item)) {
      noFalsyArr.push(item);
    }
  }
  return noFalsyArr;
}

export {
  removeFalsyValues,
};
