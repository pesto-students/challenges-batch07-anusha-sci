// import { isString } from "util"; 
// isString is deprecated hence used typeof value === "string"

function abbreviateString(str) {
  if (typeof str === 'string') {
    const splitList = str.trim().split(' ');
    if (splitList.length > 1) {
      return `${splitList[0]} ${splitList[splitList.length - 1][0].toUpperCase()}.`;
    } 
    return splitList[0];
  } 
  return abbreviateString(str).toThrow();
} 

export { abbreviateString };
