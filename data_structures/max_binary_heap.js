class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    let elementIdx = this.values.length - 1;
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
    this.values[0] = end;
    return max;
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
// console.log(heap.values);
console.log(heap.removeMax());
