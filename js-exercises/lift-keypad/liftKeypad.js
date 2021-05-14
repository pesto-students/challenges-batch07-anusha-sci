// eslint-disable-next-line consistent-return
function getTheCellOfNumber(numChar, keypad) {
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (keypad[i][j] === numChar) {
        return [i, j];
      }
    }
  }
}

function getTotalTime(passcode, keypadStr) {
  let count = 0;
  const keypad = [[], [], []];
  let time = 0;
  let currentChar = passcode[0];
  let currentRowIndex;
  let currentColIndex;
  let nextRowIndex;
  let nextColIndex;

  // filling the keypad
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      keypad[i][j] = keypadStr[count];
      count += 1;
    }
  }

  [currentRowIndex, currentColIndex] = getTheCellOfNumber(passcode[0], keypad);

  for (let i = 1; i < passcode.length; i += 1) {
    if (passcode[i] !== currentChar) {
      [nextRowIndex, nextColIndex] = getTheCellOfNumber(passcode[i], keypad);
      if (Math.abs(currentRowIndex - nextRowIndex) === 2) {
        time += 2;
      } else if (Math.abs(currentColIndex - nextColIndex) === 2) {
        time += 2;
      } else { time += 1; }

      currentRowIndex = nextRowIndex;
      currentColIndex = nextColIndex;
      currentChar = passcode[i];
    }
  }

  return time;
}

export { getTotalTime };
