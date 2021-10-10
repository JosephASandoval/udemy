class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
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

const queue1 = new Queue();
queue1.enqueue("1");
queue1.enqueue("2");
queue1.enqueue("3");
console.log(queue1.dequeue());
queue1.print();
