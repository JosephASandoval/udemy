class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  includes(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  bfs() {
    if (this.root === null) return [];
    const data = [];
    const queue = [];
    let node = this.root; // initialize node
    queue.push(node);

    while (queue.length !== 0) {
      node = queue.shift(); // current node we work with
      data.push(node.value); // record the current node's value
      if (node.left !== null) queue.push(node.left); // add left node
      if (node.right !== null) queue.push(node.right); // add right node
    }

    return data;
  }

  dfsPreOrder() {
    if (this.root === null) return [];
    const data = [];

    const traverse = (node) => {
      data.push(node.value);
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }

  dfsPostOrder() {
    if (this.root === null) return [];
    const data = [];

    const traverse = (node) => {
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
      data.push(node.value);
    };

    traverse(this.root);
    return data;
  }

  dfsInOrder() {
    if (this.root === null) return [];
    const data = [];

    const traverse = (node) => {
      if (node.left !== null) traverse(node.left);
      data.push(node.value);
      if (node.right !== null) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }
}

//      10
//   5     13
// 2  7  11  16

const tree = new BinarySearchTree();
tree.insert(10); // declaring the root here
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
// console.log(tree.includes(2)); // true
// console.log(tree.bfs()); // [ 10, 5, 13, 2, 7, 11, 16 ]
// console.log(tree.dfsPreOrder()); // [ 10, 5, 2, 7, 13, 11, 16 ]
// console.log(tree.dfsPostOrder()); // [ 2, 7, 5, 11, 16, 13, 10 ]
// console.log(tree.dfsInOrder()); // [ 2, 5, 7, 10, 11, 13, 16 ]
