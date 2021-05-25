// In this implementation of debounce the function is called at start of the window
function debounce(fn, timeInMs) {
  let lastTime = Date.now() - timeInMs;
  return function () {
    const newTime = Date.now();
    if (newTime - lastTime >= timeInMs) {
      fn();
      lastTime = newTime;
    }
  };
}

export { debounce };
