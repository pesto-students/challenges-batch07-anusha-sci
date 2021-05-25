const deepCopyObject = (objToCopy) => {
  if (objToCopy == null || typeof objToCopy !== 'object') {
    return objToCopy;
  }
  const copiedObj = {};
  // eslint-disable-next-line guard-for-in
  for (const key in objToCopy) {
    copiedObj[key] = deepCopyObject(objToCopy[key]);
  }
  return copiedObj;
};

export { deepCopyObject };
