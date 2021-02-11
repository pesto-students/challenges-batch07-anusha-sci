/* eslint-disable */
function duplicateLetters(s) {
  var lettersList = s.split("");
  var setOfLetters  = new Set(lettersList);
  var maxCount = 0;
  if (lettersList.length == setOfLetters.size) {
    return false
  } else {
    
    for (let value of setOfLetters) {
      let count;
      count = 0
      for (let j = 0; j < lettersList.length; j ++) {
        if (value == lettersList[j]) {
          count ++
        }
      }
    
      if ( count > maxCount) {
        maxCount = count
      }

    }
    return maxCount

  }
  
  
}

export {
  duplicateLetters,
};
