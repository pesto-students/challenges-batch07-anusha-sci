// function balancedBraces(str) {
//   const bracesPair = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//   };
//   const bracesStack = [];
//   for (const char of str) {
//     if (Object.values(bracesPair).includes(char)) {
//       bracesStack.push(char);
//     } else if (char in bracesPair) {
//       if (bracesPair.length !== 0 && bracesStack[bracesStack.length - 1] === bracesPair[char]) {
//         bracesStack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return bracesStack.length === 0;
// }

// export {
//   balancedBraces,
// };

function balancedBraces(expression) {
  const bracesMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const openingBraces = Object.keys(bracesMap);
  const closingBraces = Object.values(bracesMap);

  const isOpeningBrace = (char) => openingBraces.includes(char);
  const isClosingBrace = (char) => closingBraces.includes(char);
  const stack = [];

  for (const char of expression) {
    if (isOpeningBrace(char) || isClosingBrace(char)) {
      if (isOpeningBrace(char)) {
        stack.push(char);
      } else {
        const topItem = stack.pop();
        if (bracesMap[topItem] !== char) {
          return false;
        }
      }
    }
  }

  if (stack.length) {
    return false;
  }
  return true;
}

export { balancedBraces };
