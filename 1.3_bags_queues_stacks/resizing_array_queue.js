class ResizingArrayQueue {
  constructor() {
    this.arr = new Array(2).fill(null);
    this.n = 0;
    this.first = 0;
    this.last = 0;
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
    this.first = 0;
    this.last = this.n;
  }

  enqueue(item) {
    if (this.n === this.arr.length) {
      this.resize(2 * this.arr.length);
    }
    this.arr[this.last++] = item;
    if (this.last === this.arr.length) {
      this.last = 0;
    }
    this.n++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw Error("Queue underflow");
    }
    let item = this.arr[this.first];
    this.arr[this.first] = null;
    this.n--;
    this.first++;
    if (this.first === this.arr.length) {
      this.first = 0;
    }
    if (this.n > 0 && this.n === this.arr.length / 4) {
      this.resize(this.arr.length / 2);
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      throw Error("Queue underflow");
    }
    this.arr[this.first];
  }
}
