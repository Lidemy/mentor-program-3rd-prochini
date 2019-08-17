class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items[this.items.length] = element;
  }

  pop() {
    const num = this.items[this.items.length - 1];
    this.items.length -= 1;
    return num;
  }
}


class Queue {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items[this.items.length] = element;
  }

  pop() {
    const firstElement = this.items.shift();
    return firstElement;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

const queue = new Queue();
queue.push(4);
queue.push(5);
queue.push(6);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
