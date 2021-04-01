class Cycled {
  constructor(arr) {
    this.fixture = [...arr];
    this.currentIndex = 0;
  }

  current() {
    return this.fixture[this.currentIndex];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.fixture.length;
    return this.current();
  }

  previous() {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.fixture.length - 1;
    }
    return this.current();
  }

  step(n) {
    if (n >= 0) {
      this.currentIndex = (this.currentIndex + n) % this.fixture.length;
    } else {
      for (let i = 0; i < -n; i += 1) {
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
          this.currentIndex = this.fixture.length - 1;
        }
      }
    }
    return this.current();
  }

  get index() {
    return this.currentIndex;
  }

  set index(n) {
    if (n >= 0) {
      this.currentIndex = n % this.fixture.length;
    } else {
      const n1 = n % this.fixture.length;
      this.currentIndex = 0;
      for (let i = 0; i < -n1; i += 1) {
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
          this.currentIndex = this.fixture.length - 1;
        }
      }
    }
  }

  reversed() {
    this.fixture.reverse();
    return this[Symbol.iterator]();
  }

  indexOf(item) {
    return this.fixture.indexOf(item);
  }

  * [Symbol.iterator]() {
    let index = this.currentIndex;
    for (let i = 0; i < this.fixture.length; i += 1) {
      yield this.fixture[index];
      index = (index + 1) % this.fixture.length;
    }
  }
}

export { Cycled };
