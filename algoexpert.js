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

  // checks if you need to wrap
  if (currentCol === board[currentRow].length) {
    currentRow++;
    currentCol = 0;
    // finished solving b/c reached the end; stop condition
    if (currentRow === board.length) return true;
  }

  // if position is zero, then try digits
  if (board[currentRow][currentCol] === 0) {
    return tryValuesAtPosition(currentRow, currentCol, board);
  }

  // move to next position recursively
  return solvePartialSudoku(currentRow, currentCol + 1, board);
};

// value is only valid at position if the board can be solved with that value at that position
// basically, tries different values and performs the back tracking if neccessary by returning false
const tryValuesAtPosition = (row, col, board) => {
  for (let value = 1; value < 10; value++) {
    if (isValidAtPosition(value, row, col, board)) {
      board[row][col] = value;
      // then tries to solve the rest of the board with this valid value
      // if the bottom conditional returns false, then try the next value up until the rest of the board can be solved
      if (solvePartialSudoku(row, col + 1, board)) return true;
    }
  }

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
