function rot13(str) {
  let decodedStr = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'N' && str[i] <= 'Z') {
      decodedStr += String.fromCharCode((str.charCodeAt(i) - 13));
    } else if (str[i] >= 'A' && str[i] <= 'M') {
      decodedStr += String.fromCharCode((str.charCodeAt(i) + 13));
    } else {
      decodedStr += str[i];
    }
  }
  return decodedStr;
}

export {
  rot13,
};
