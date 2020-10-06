class Node {
  item = null;
  next = null;
}

class LinkedQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.n = 0;
  }

  isEmpty() {
    return this.first === null;
  }

  size() {
    return this.n;
  }

  peek() {
    if (this.isEmpty()) {
      throw Error("Stack underflow");
    }
    return this.first.item;
  }
  enqueue(item) {
    let oldlast = this.last;
    this.last = new Node();
    this.last.item = item;
    this.last.next = null;
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldlast.next = this.last;
    }
    this.n++;
  }
  dequeue() {
    if (this.isEmpty()) {
      throw Error("Stack underflow");
    }
    let item = this.first.item;
    this.first = this.first.next;
    this.n--;
    if (this.isEmpty()) {
      this.last = null;
    }
    return item;
  }
}