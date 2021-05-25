const sumEvenArgs = (...args) => {
  const listEvenNum = args.filter((num) => num % 2 === 0);
  const result = listEvenNum.reduce((acc, num) => acc + num, 0);
  return result;
};

export { sumEvenArgs };
