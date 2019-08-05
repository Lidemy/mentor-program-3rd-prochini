const arr = [];
class Stack {
  push(n) {
    arr[arr.length] = n;
    console.log(arr);
  }

  pop() {
    const num = arr[arr.length - 1];
    arr.length -= 1;
    return num;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

const Array = [];
class Queue {
  push(n) {
    Array[Array.length] = n;
    console.log(Array);
  }

  pop() {
    const firstElement = Array.shift();
    return firstElement;
  }
}
const queue = new Queue();
queue.push(4);
queue.push(5);
queue.push(6);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
