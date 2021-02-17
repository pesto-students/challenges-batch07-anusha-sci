function duplicateLetters(str) {
  const charMap = {};
  for (const char of str) {
    if (char in charMap) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }
  const maxCount = Math.max(...Object.values(charMap));
  if (maxCount <= 1) return false;
  return maxCount;
}

export {
  duplicateLetters,
};
