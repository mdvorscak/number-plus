import assert from 'assert';

class NumberPlus {
  constructor(num) {
    this.num = num;
  }
  times(fn) {
    for (let x = 0; x < this.num; x++) {
      fn(x);
    }
  }
  downTo(floor) {
    assert(floor < this.num, 'floor must be less than the initial number');
    return fn => {
      for (let x = this.num; x >= floor; x--) {
        fn(x);
      }
    };
  }
  upTo(ceil) {
    assert(ceil > this.num, 'ceil must be greater than the initial number');
    return fn => {
      for (let x = this.num; x <= ceil; x++) {
        fn(x);
      }
    };
  }
  even() {
    return this.num % 2 === 0;
  }
  odd() {
    return !this.even();
  }
}

const n = num => {
  return new NumberPlus(num);
};

export default n;
