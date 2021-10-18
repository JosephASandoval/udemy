const maxValue = (nums) => {
  // use a loop
  // create a variable to keep track of the max
  // update the max throughout the loop
  // return the max

  let max = -Infinity;
  for (const el of nums) {
    if (el > max) {
      max = el;
    }
  }

  return max;

  // n = length of array
  // Time: O(n)
  // Space: O(1)
};

const isPrime = (n) => {
  // return boolean if prime
  // divide the given number by a range of numbers between 2 and itself
  // 1 is not prime
  // 2 is prime
  // input: positive number

  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;

  // n = input number
  // Time: O(square_root(n))
  // Space: O(1)
};

const uncompress = (s) => {
  // create 2 pointer i, j
  // have j increment as long as the char at the j index is a number
  // create a string of numbers to check for this
  // create a results array to keep track of the letters
  // return the results array converted to a string

  const result = [];
  const numbers = "0123456789";
  let i = 0;
  let j = 0;

  while (j < s.length) {
    let char = s[j];
    if (numbers.includes(char)) {
      j++;
    } else {
      let num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        result.push(char);
      }
      j++;
      i = j;
    }
  }
  return result.join("");

  // n = number of groups
  // m = max num found in any group
  // Time: O(n * m)
  // Space: O(n * m)
};

const compress = (s) => {
  // loop through the string
  // find current value and check if equal to the next char
  // create a count variable to keep track of the num chars
  // if not equal then add the count to an array and then add the char to the array
  // return the array

  const result = [];
  let i = 0;
  let j = 0;

  while (j <= s.length) {
    let curr = s[i];
    let next = s[j];

    if (curr === next) {
      j++;
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(curr);
      } else {
        result.push(String(num), curr);
      }
      i = j;
    }
  }

  return result.join("");

  // n = length of string
  // Time: O(n)
  // Space: O(n)
};

const anagrams = (s1, s2) => {
  // create an object to store the frequency of each char in the first string
  // then remove the frequency of each char in the second string from that same object
  // retun true if all of the values in that obj are 0

  const counter = {};

  for (const char of s1) {
    counter[char] = (counter[char] || 0) + 1;
  }

  for (const char of s2) {
    counter[char] = (counter[char] || 0) - 1;
  }

  return Object.values(counter).every((el) => el === 0);

  // n = length of s1
  // m = length of s2
  // Time: O(n + m)
  // Space: O(n)
};

const mostFrequentChar = (s) => {
  // create a counter object to keep track of the freq of each char
  // then loop thru string figuring out which char has the highest freq
  // update the best char only if the freq is great in order to maintain order in case of a tie

  const counter = {};
  let best = s[0];

  for (const char of s) {
    counter[char] = (counter[char] || 0) + 1;
  }

  for (const char of s) {
    if (counter[char] > counter[best]) {
      best = char;
    }
  }

  return best;

  // n = length of input string
  // Time: O(n)
  // Space: O(n)
};

const pairSum = (numbers, targetSum) => {
  // use an object to keep track of numbers visited

  const previousNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;

    if (complement in previousNums) {
      return [previousNums[complement], i];
    }

    previousNums[num] = i;
  }

  // n = length of input array
  // Time: O(n)
  // Space: O(n)
};

const pairProduct = (numbers, targetProduct) => {
  // use an object to keep track of numbers visited

  const previousNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetProduct / num;

    if (complement in previousNums) {
      return [previousNums[complement], i];
    }

    previousNums[num] = i;
  }

  // n = length of input array
  // Time: O(n)
  // Space: O(n)
};

const intersection = (a, b) => {
  // use a set because using Set.has has a run time of O(1), while using Array.includes has a run time of O(n)

  const numbers = [];

  const setA = new Set(a);

  for (const item of b) {
    if (setA.has(item)) {
      numbers.push(item);
    }
  }

  return numbers;

  // n = length of a
  // m = length of b
  // Time: O(n + m)
  // Space: O(n)
};

const fiveSort = (nums) => {
  // must mutate the original array
  // must place all 5s at end of array
  // approach: multiple pointers

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[right] === 5) {
      right--;
    } else if (nums[left] === 5) {
      swap(nums, left, right);
      left++;
    } else {
      left++;
    }
  }

  return nums;

  // n = length of input array
  // Time: O(n)
  // Space: O(1)
};

const linkedListValues = (head) => {
  // create an array that stores each node.val in order starting at the head
  // approach: iterative

  const values = [];

  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const linkedListValues = (head) => {
  // create an array that stores each node.val in order starting at the head
  // approach: recursive

  if (head === null) return [];

  return [head.val].concat(linkedListValues(head.next)); // [a] + [b, c, d]

  // n = number of nodes
  // Time: O(n^2)
  // Space: O(n)
};

const linkedListValues = (head) => {
  // create an array that stores each node.val in order starting at the head
  // approach: recursive
  // used a helper function to avoid recusive call from creating multiple arrays, which avoids a run time of O(n^2)

  const values = [];
  _linkedListValues(head, values);
  return values;
};

const _linkedListValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  _linkedListValues(head.next, values);

  // n = number of nodes
  // Time: O(n^2)
  // Space: O(n)
};

const sumList = (head) => {
  // create a count variable to keep track of the total sum
  // traverse thru the linked list and add each value
  // approach: iterative

  let count = 0;

  let current = head;
  while (current !== null) {
    count += current.val;
    current = current.next;
  }

  return count;

  // n = number of nodes
  // Time: O(n)
  // Space: O(1)
};

const sumList = (head) => {
  // create a count variable to keep track of the total sum
  // traverse thru the linked list and add each value
  // approach: recursive

  if (head === null) return 0;

  return sumList(head.next) + head.val;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const linkedListFind = (head, target) => {
  // loop thru the linked list
  // return true if val is the target
  // approach: iterative

  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }

  return false;

  // n = number of nodes
  // Time: O(n)
  // Space: O(1)
};

const linkedListFind = (head, target) => {
  // loop thru the linked list
  // return true if val is the target
  // approach: recursive

  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const getNodeValue = (head, index) => {
  // loop thru linked list using a current variable rep the current node
  // stop at specified index by looping until a certain number of times
  // return the val at that point
  // approach: iterative

  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index) return current.val;
    current = current.next;
    count++;
  }
  return null;

  // n = number of nodes
  // Time: O(n)
  // Space: O(1)
};

const getNodeValue = (head, index) => {
  // loop thru linked list using a current variable rep the current node
  // stop at specified index by looping until a certain number of times
  // return the val at that point
  // approach: recursive

  if (head === null) return null;
  if (index === 0) return head.val;

  return getNodeValue(head.next, index - 1);

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const reverseList = (head) => {
  // to reverse a linked list you need a prev, current, and next node variables
  // set prev and next to null
  // set curr to the head
  // approach: iterative

  let curr = head;
  let prev = null;
  let next = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;

  // n = number of nodes
  // Time: O(n)
  // Space: O(1)
};

const reverseList = (head, prev = null) => {
  // to reverse a linked list you need a prev, current, and next node variables
  // set prev and next to null
  // set curr to the head
  // approach: recursive

  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const zipperLists = (head1, head2) => {
  // need two variables to keep track of the next node to add
  // iterate thru both linked lists
  // use a count variable to determine which linked list to add next
  // add remainder of links if one list runs out
  // return head1 at the end

  let dummyHead = new Node(null);
  let tail = dummyHead;
  let current1 = head1;
  let current2 = head2;
  let count = 0;

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
    count++;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return dummyHead.next;

  // n = length of list 1
  // m = length of list 2
  // Time: O(min(n, m))
  // Space: O(1)
};

const mergeLists = (head1, head2) => {
  // sort by comparing the value at each node

  let dummyHead = new Node(null);
  let tail = dummyHead;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return dummyHead.next;

  // n = length of list 1
  // m = length of list 2
  // Time: O(min(n, m))
  // Space: O(1)
};

const isUnivalueList = (head) => {
  // approach: iterative

  let current = head;
  while (current !== null) {
    if (current.val !== head.val) return false;
    current = current.next;
  }

  return true;

  // n = number of nodes
  // Time: O(n)
  // Space: O(1)
};

const longestStreak = (head) => {
  // loop thru linked list
  // create a maxStreak var to keep track of the longest streak
  // within the loop define a current streak to compare max streak with

  let maxStreak = 0;
  let currentStreak = 0;
  let current = head;
  let prevVal = null;

  while (current !== null) {
    if (current.val === prevVal) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) maxStreak = currentStreak;

    prevVal = current.val;
    current = current.next;
  }

  return maxStreak;

  // n = number of nodes
  // Time: O(n)
  // Space: O(1)
};

const removeNode = (head, targetVal) => {
  // loop
  // delete first instance of node with target value

  if (head.val === targetVal) {
    let newList = head.next;
    head.next = null;
    return newList;
  }

  let curr = head;
  let prev = null;
  while (curr !== null) {
    if (curr.val === targetVal) {
      prev.next = curr.next;
      curr.next = null;
      return head;
    }
    prev = curr;
    curr = curr.next;
  }

  // n = number of nodes
  // Time: O(n)
  // Space: O(1)
};

const insertNode = (head, value, index) => {
  // loop
  // add new node

  const newNode = new Node(value);

  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  let count = 0;
  let curr = head;

  while (curr !== null) {
    if (count === index - 1) {
      newNode.next = curr.next;
      curr.next = newNode;
      break;
    }
    count++;
    curr = curr.next;
  }

  return head;

  // n = number of nodes
  // Time: O(n)
  // Space: O(1)
};

const createLinkedList = (values) => {
  // loop thru the array
  // create a new Node for each element
  // apply the next node
  // approach: iterative

  const dummyHead = new Node(null);
  let tail = dummyHead;
  for (const val of values) {
    tail.next = new Node(val);
    tail = tail.next;
  }

  return dummyHead.next;

  // n = length of input array
  // Time: O(n)
  // Space: O(n)
};

const createLinkedList = (values, i = 0) => {
  // loop thru the array
  // create a new Node for each element
  // apply the next node
  // approach: recursive

  if (i === values.length) return null;
  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);
  return head;

  // n = length of input array
  // Time: O(n)
  // Space: O(n)
};

const addLists = (head1, head2) => {
  // use the dummyHead pattern
  // approach: iterative

  const dummyHead = new Node(null);
  let tail = dummyHead;

  let carry = 0;
  let curr1 = head1;
  let curr2 = head2;

  while (curr1 !== null || curr2 !== null || carry !== 0) {
    const val1 = curr1 === null ? 0 : curr1.val;
    const val2 = curr2 === null ? 0 : curr2.val;
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;

    const digit = sum % 10;
    tail.next = new Node(digit);
    tail = tail.next;

    if (curr1 !== null) curr1 = curr1.next;
    if (curr2 !== null) curr2 = curr2.next;
  }

  return dummyHead.next;

  // n = length of list 1
  // m = length of list 2
  // Time: O(max(n, m))
  // Space: O(max(n, m))
};

const depthFirstValues = (root) => {
  // DFSPreOrder
  // approach: recursive 1

  if (root === null) return [];

  const data = [];

  function traverse(node) {
    data.push(node.val);
    if (node.left !== null) traverse(node.left);
    if (node.right !== null) traverse(node.right);
  }

  traverse(root);
  return data;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const depthFirstValues = (root) => {
  // stack -> push/pop on an array for better time complexity
  // approach: recursive 2
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

const depthFirstValues = (root) => {
  // DFSPreOrder
  // approach: iterative

  if (root === null) return [];

  const data = [];
  const stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    data.push(node.val);
    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);
  }

  return data;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const breadthFirstValues = (root) => {
  // BFS
  // approach: iterative

  if (root === null) return [];

  const data = [];
  const queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    data.push(node.val);
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return data;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const treeIncludes = (root, target) => {
  // approach: iterative using BSF

  if (root === null) return false;

  const stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val === target) return true;
    if (node.left !== null) stack.push(node.left);
    if (node.right !== null) stack.push(node.right);
  }

  return false;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const treeIncludes = (root, target) => {
  // approach: recursive using DFS

  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const treeSum = (root) => {
  // use DFS recursion

  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const treeSum = (root) => {
  // use BFS

  if (root === null) return 0;

  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    let node = queue.shift();
    sum += node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return sum;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const treeMinValue = (root) => {
  // approach: recursive 1

  if (root === null) return Infinity;
  const smallestLeftValue = treeMinValue(root.left);
  const smallestRightValue = treeMinValue(root.right);
  return Math.min(root.val, smallestLeftValue, smallestRightValue);

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const treeMinValue = (root) => {
  // approach: recursive 2

  if (root === null) return undefined;

  let minValue = Infinity;

  const traverse = (node) => {
    if (node.val < minValue) minValue = node.val;
    if (node.left !== null) traverse(node.left);
    if (node.right !== null) traverse(node.right);
  };

  traverse(root);
  return minValue;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const treeMinValue = (root) => {
  // approach: BFS

  if (root === null) return undefined;

  const queue = [root];
  let minVal = Infinity;

  while (queue.length > 0) {
    const node = queue.shift();
    if (node.val < minVal) minVal = node.val;
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return minVal;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const maxPathSum = (root) => {
  // you've hit a leaf when there is no left or right node

  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const maxChildPath = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return root.val + maxChildPath;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const pathFinder = (root, target) => {
  // use DFS recursion; less efficient

  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinder(root.left, target);
  if (leftPath !== null) return [root.val, ...leftPath];

  const rightPath = pathFinder(root.right, target);
  if (rightPath !== null) return [root.val, ...rightPath];

  return null;

  // n = number of nodes
  // Time: O(n^2) because the spread operation is O(n)
  // Space: O(n)
};

const pathFinder = (root, target) => {
  // use DFS recursion; less efficient

  const result = pathFinderHelper(root, target);
  if (result === null) {
    return null;
  } else {
    return result.reverse();
  }
};

const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinderHelper(root.left, target);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }

  const rightPath = pathFinderHelper(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const treeValueCount = (root, target) => {
  // use DFS recursion

  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;
  const leftCount = treeValueCount(root.left, target);
  const rightCount = treeValueCount(root.right, target);
  return match + leftCount + rightCount;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const howHigh = (node) => {
  // use DFS recursion

  if (node === null) return -1;
  const maxHeight = Math.max(howHigh(node.left), howHigh(node.right));
  return maxHeight + 1;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const bottomRightValue = (root) => {
  // bottom most takes precedence
  // then take the right most value
  // use BFS

  const queue = [root];
  let current = null;

  while (queue.length > 0) {
    current = queue.shift();
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return current.val;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const allTreePaths = (root) => {
  // use DFS recursion

  if (root === null) return [];

  if (root.left === null && root.right === null) return [[root.val]];

  const paths = [];

  const leftSubPaths = allTreePaths(root.left);
  for (let subPath of leftSubPaths) {
    paths.push([root.val, ...subPath]);
  }

  const rightSubPaths = allTreePaths(root.right);
  for (let subPath of rightSubPaths) {
    paths.push([root.val, ...subPath]);
  }

  return paths;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};
