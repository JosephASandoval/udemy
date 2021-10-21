const solveSudoku = (board) => {
  // start at the top left; return board after recusive call returns true
  solvePartialSudoku(0, 0, board);
  return board;
};

// returns whether or not Sudoku is partially solved for a given position
// this is the core recursive algorithm
const solvePartialSudoku = (row, col, board) => {
  let currentRow = row;
  let currentCol = col;

  // check if you need to wrap around the board while traversing the board
  if (currentCol === board[currentRow].length) {
    currentRow++;
    currentCol = 0;
    
    // checks if you've reached the end of the board
    // finished solving b/c reached the end; stop condition
    if (currentRow === board.length) return true;
  }

  // if position is zero, then try digits. Else, move to next position
  if (board[currentRow][currentCol] === 0) {
    return tryValuesAtPosition(currentRow, currentCol, board);
  } else {
    return solvePartialSudoku(currentRow, currentCol + 1, board);
  }
};

// value is only valid at position if the board can be solved with that value at that position
// basically, tries different values and performs the back tracking if neccessary by returning false
const tryValuesAtPosition = (row, col, board) => {
  for (let value = 1; value < 10; value++) {
    if (isValidAtPosition(value, row, col, board)) {
      board[row][col] = value;
      // then tries to solve the rest of the board with this valid value
      // if the bottom conditional returns false, then try the next value up until the rest of the board can be solved
      // this is the back tracking step: if this current value did not work for all future values then it will try a new value until one value is 100% correct
      // it'll work to "solidify" values at the beginning and then to the end
      if (solvePartialSudoku(row, col + 1, board)) return true;
    }
  }

  // if we've tried every value and none work then reset that position to zero and return false
  // this will force the previous value to be changed by incrementing that value by 1 and trying again
  board[row][col] = 0;
  return false;
};

const isValidAtPosition = (value, row, col, board) => {
  const rowIsValid = !board[row].includes(value);
  const colIsValid = !board.map((r) => r[col]).includes(value);

  if (!rowIsValid || !colIsValid) return false;

  // Check subgrid contraint.
  const subgridRowStart = Math.floor(row / 3) * 3;
  const subgridColStart = Math.floor(col / 3) * 3;
  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const rowToCheck = subgridRowStart + rowIdx;
      const colToCheck = subgridColStart + colIdx;
      const existingValue = board[rowToCheck][colToCheck];

      if (existingValue === value) return false;
    }
  }

  return true;

  // Time: O(1)
  // Space: O(1)
};

// let input = [
//   [7, 8, 0, 4, 0, 0, 1, 2, 0],
//   [6, 0, 0, 0, 7, 5, 0, 0, 9],
//   [0, 0, 0, 6, 0, 1, 0, 7, 8],
//   [0, 0, 7, 0, 4, 0, 2, 6, 0],
//   [0, 0, 1, 0, 5, 0, 9, 3, 0],
//   [9, 0, 4, 0, 6, 0, 0, 0, 5],
//   [0, 7, 0, 3, 0, 0, 0, 1, 2],
//   [1, 2, 0, 0, 0, 7, 4, 0, 0],
//   [0, 4, 9, 2, 0, 6, 0, 0, 7],
// ];

// let input = [
//   [7, 8, 5, 4, 3, 9, 1, 2, 6],
//   [6, 1, 2, 8, 7, 5, 3, 4, 9],
//   [4, 9, 3, 6, 2, 1, 5, 7, 8],
//   [8, 5, 7, 9, 4, 3, 2, 6, 1],
//   [2, 6, 1, 7, 5, 8, 9, 3, 4],
//   [9, 3, 4, 1, 6, 2, 7, 8, 5],
//   [5, 7, 8, 3, 9, 4, 6, 1, 2],
//   [1, 2, 6, 5, 8, 7, 4, 9, 3],
//   [3, 4, 9, 2, 1, 6, 8, 5, 7],
// ];

// console.log(solveSudoku(input));

const balancedBrackets = (string) => {
  const openingBrackets = "([{";
  const closingBrackets = ")]}";
  const matchingBrackets = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (const char of string) {
    if (openingBrackets.includes(char)) stack.push(char);

    if (closingBrackets.includes(char)) {
      if (stack.length === 0) {
        return false;
      } else {
        if (stack[stack.length - 1] === matchingBrackets[char]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0;

  // n = length of string
  // Time: O(n)
  // Space: O(n)
};

const twoNumberSum = (array, targetSum) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];

  // n = length of array
  // Time: O(n^2)
  // Space: O(1)
};

const twoNumberSum = (array, targetSum) => {
  const seen = {};

  for (const num of array) {
    let counterPart = targetSum - num;
    if (counterPart in seen) {
      return [counterPart, num];
    } else {
      seen[num] = true;
    }
  }

  return [];

  // n = length of array
  // Time: O(n)
  // Space: O(n)
};

const twoNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum < targetSum) {
      left++;
    } else if (sum > targetSum) {
      right--;
    } else {
      return [array[left], array[right]];
    }
  }

  return [];

  // n = length of array
  // Time: O(nlog(n))
  // Space: O(1)
};

const isValidSubsequence = (array, sequence) => {
  let mainIdx = 0;
  let subIdx = 0;

  while (mainIdx !== array.length && subIdx !== sequence.length) {
    const mainEle = array[mainIdx];
    const subEle = sequence[subIdx];

    if (mainEle === subEle) {
      mainIdx++;
      subIdx++;
    } else {
      mainIdx++;
    }
  }

  return subIdx === sequence.length;

  // n = length of array
  // Time: O(n)
  // Space: O(1)
};

const sortedSquaredArray = (array) => {
  const newArr = array.map((num) => Math.abs(num * num));
  newArr.sort((a, b) => a - b);
  return newArr;

  // n = length of array
  // Time: O(nlog(n))
  // Space: O(n)
};

const sortedSquaredArray = (array) => {
  // use two pointers one to the left, and one to the right
  // use unshift to populate an array

  const newArr = [];
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const leftVal = array[left] ** 2;
    const rightVal = array[right] ** 2;

    if (leftVal > rightVal) {
      newArr.unshift(leftVal);
      left++;
    } else {
      newArr.unshift(rightVal);
      right--;
    }
  }

  newArr.unshift(array[left] ** 2);

  return newArr;

  // n = length of array
  // Time: O(n)
  // Space: O(n)
};

const tournamentWinner = (competitions, results) => {
  // keep track of each teams score using an object
  // loop thru competitions and results to determine which teams gets 3 points
  // return the team with the most point according to the scores object

  const scores = {};
  let max = -Infinity;
  let overallWinner = null;

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    let winner = results[i] === 0 ? awayTeam : homeTeam;
    scores[winner] = (scores[winner] || 0) + 3;
  }

  for (const key in scores) {
    if (scores[key] > max) {
      max = scores[key];
      overallWinner = key;
    }
  }

  return overallWinner;

  // n = length of array
  // Time: O(n)
  // Space: O(n)
};

const nonConstructibleChange = (coins) => {
  // Write your code here.
  // sort the array
  // iterate thru the array using a for loop
  // add each element to the change variable for every loop
  // check if the element being added is more or less than the current change value plus 1
  // if the next element is greater than, then break out of the for loop
  // if next element is less than, then update the change variable
  // at end of the for loop return the change variable plus 1

  coins.sort((a, b) => a - b); // [1, 2, 5]

  let change = 0;

  for (let coin of coins) {
    if (change + 1 < coin) break;
    change += coin;
  }
  return change + 1;

  // n = length of array
  // Time: O(nlog(n))
  // Space: O(1)
};

const findClosestValueInBst = (tree, target) => {
  // traverse the tree using either dfs
  // create a varible called closest set at Infinity
  // when updating closest make sure to also update the closest value called answer

  if (tree === null) return null;

  let closest = Infinity;
  let answer = null;

  const stack = [tree];

  while (stack.length > 0) {
    const node = stack.pop();
    const diff = Math.abs(target - node.value);
    if (diff < closest) {
      closest = diff;
      answer = node.value;
    }
    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);
  }

  return answer;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const branchSums = (root) => {
  // generate a 2d array with all branches from left to right
  // return an array of sums for each branch in same order

  const branches = fillBranches(root);
  const sums = branches.map(getSum);
  return sums;
};

const getSum = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const fillBranches = (root) => {
  if (root === null) return [];

  if (root.left === null && root.right === null) return [[root.value]];

  const leftBranches = fillBranches(root.left); // [[b]]
  const rightBranches = fillBranches(root.right); // [[c]]
  const allChildBranches = [...leftBranches, ...rightBranches];
  const allBranches = allChildBranches.map((branch) => [root.value, ...branch]);
  return allBranches;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const nodeDepths = (root) => {
  // first return a 2D array with all elements in their corresponding treeLevel
  // then multiply the levels by the number of elements at each level
  // finally, return the sum

  const levels = [];
  fillLevels(root, levels, 0);
  const levelSum = levels.map(getSum);
  return levelSum.reduce((acc, curr) => acc + curr, 0);
};

const getSum = (arr, idx) => {
  const size = arr.length;
  return size * idx;
};

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.value];
  } else {
    levels[levelNum].push(root.value);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const getNthFib = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return getNthFib(n - 1) + getNthFib(n - 2);

  // Time: O(2^n)
  // Space: O(n)
};

const memoize = { 1: 0, 2: 1 };
function getNthFib(n) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1) + getNthFib(n - 2);
    return memoize[n];
  }

  // Time: O(n)
  // Space: O(n)
}
