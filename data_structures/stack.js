class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return null;
    let oldFirst = this.first;
    this.first = oldFirst.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return oldFirst.value;
  }

  print() {
    let arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const stack1 = new Stack();
stack1.push("1");
stack1.push("2");
stack1.push("3");
stack1.pop();
stack1.print();
