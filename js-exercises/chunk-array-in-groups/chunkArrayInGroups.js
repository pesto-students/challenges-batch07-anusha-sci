function chunkArrayInGroups(array, chunkSize) {
  const chunkedArr = Array(Math.ceil(array.length / chunkSize))
    .fill().map(() => array.splice(0, chunkSize));
  return chunkedArr;
}

export {
  chunkArrayInGroups,
};
