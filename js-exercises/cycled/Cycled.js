class Cycled {
  constructor(arr) {
    this.fixture = [...arr];
    this.currentIndex = 0;
    this.length = arr.length;
  }

  current() {
    return this.step(0);
  }

  next() {
    return this.step(1);
  }

  previous() {
    return this.step(-1);
  }

  step(n) {
    this.currentIndex = (this.currentIndex + (n % this.length) + this.length) % this.length;
    return this.fixture[this.currentIndex];
  }

  get index() {
    return this.currentIndex;
  }

  set index(n) {
    this.currentIndex = ((n % this.length) + this.length) % this.length;
  }

  reversed() {
    this.fixture.reverse();
    return this[Symbol.iterator]();
  }

  // get reversed() {
  //   const _this = this;
  //   return function* () {
  //     yield _this.previous();
  //   };
  // }

  indexOf(item) {
    return this.fixture.indexOf(item);
  }

  * [Symbol.iterator]() {
    let index = this.currentIndex;
    for (let i = 0; i < this.length; i += 1) {
      yield this.fixture[index];
      index = (index + 1) % this.length;
    }
  }
}

export { Cycled };
