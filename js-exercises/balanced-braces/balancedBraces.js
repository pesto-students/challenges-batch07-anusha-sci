function balancedBraces(str) {
  const bracesPair = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const bracesStack = [];
  for (const char of str) {
    if (Object.values(bracesPair).includes(char)) {
      bracesStack.push(char);
    } else if (char in bracesPair) {
      if (bracesPair.length !== 0 && bracesStack[bracesStack.length - 1] === bracesPair[char]) {
        bracesStack.pop();
      } else {
        return false;
      }
    }
  }
  return bracesStack.length === 0;
}

export {
  balancedBraces,
};
