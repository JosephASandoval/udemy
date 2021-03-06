class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let elementIdx = this.values.length - 1;
    const element = this.values[elementIdx];
    while (elementIdx > 0) {
      let parentIdx = Math.floor((elementIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[elementIdx] = parent;
      elementIdx = parentIdx;
    }
  }

  removeMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let elementIdx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * elementIdx + 1;
      let rightChildIdx = 2 * elementIdx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        // checking that it isn't out of bounds
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        // checking that it isn't out of bounds
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[elementIdx] = this.values[swap];
      this.values[swap] = element;
      elementIdx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
// console.log(heap.values); // [55, 39, 41, 18, 27, 12, 33]
console.log(heap.removeMax());
console.log(heap.values); // [41, 39, 33, 18, 27, 12]
