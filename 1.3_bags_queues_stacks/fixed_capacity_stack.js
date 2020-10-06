class FixedCapacityStack {
  constructor(capacity) {
    this.arr = new Array(capacity).fill(null);
    this.n = 0;
  }
  isEmpty() {
    return this.n === 0;
  }
  push(val) {
    this.arr[this.n++] = val;
  }
  pop() {
    let val = this.arr[--this.n];
    this.arr[this.n] = null;
    return val;
  }
}
