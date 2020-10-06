class Node {
  item = null;
  next = null;
}

class LinkedStack {
  constructor() {
    this.first = null;
    this.n = 0;
  }
  isEmpty() {
    return this.first === null;
  }
  size() {
    return this.n;
  }
  push(item) {
    let oldFirst = this.first;
    this.first = new Node();
    this.first.item = item;
    this.first.next = oldFirst;
    this.n++;
  }
  pop() {
    if (this.isEmpty()) {
      throw Error("Stack underflow");
    }
    let item = this.first.item;
    this.first = this.first.next;
    this.n--;
    return item;
  }
  peek() {
    if (this.isEmpty()) {
      throw Error("Stack underflow");
    }
    return this.first.item;
  }
}

let stack = new LinkedStack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
