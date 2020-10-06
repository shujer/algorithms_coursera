class ResizeingArrayStack {
  constructor(capacity = 0) {
    this.arr = new Array(capacity).fill(null);
    this.n = 0;
  }
  isEmpty() {
    return this.n === 0;
  }
  size() {
    return this.n;
  }
  resize(capacity) {
    if (capacity < this.n) {
      return;
    }
    let copy = new Array(capacity);
    for (let i = 0; i < this.n; i++) {
      copy[i] = this.arr[(this.first + index) % this.arr.length];
    }
    this.arr = copy;
  }

  push(item) {
    if (this.n === this.arr.length) {
      this.resize(2 * this.arr.length);
    }
    this.arr[this.n++] = item;
  }
  pop() {
    if (this.isEmpty()) {
      throw Error("Stack underflow");
    }
    let item = this.arr[this.n - 1];
    this.arr[this.n - 1] = null;
    this.n--;
    if (this.n > 0 && this.n === this.arr.length / 4) {
      this.resize(this.arr.length / 2);
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      throw Error("Stack underflow");
    }
    return this.arr[this.n - 1];
  }
}
let stack = new ResizeingArrayStack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
