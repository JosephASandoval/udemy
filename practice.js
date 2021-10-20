const solveSudoku = (board) => {
  solvePartialSudoku(0, 0, board);
  return board;
};

const solvePartialSudoku = (row, col, board) => {
  // input a value at the next position that contains a zero
  // test that number by recusively trying each value 1 - 9

  let currentRow = row;
  let currentCol = col;

  if (currentCol === board[currentRow].length) {
    currentRow++;
    currentCol = 0;
    if (currentRow === board.length) return true
  }

  if (board[currentRow][currentCol] === 0) {
    return 
  }
};

const isValidAtPosition = (value, row, col, board) => {
  // check the rows, col, and subgrid for the value
  // if there then return false, true otherwise

  const isRowValid = !board[row].includes(value);
  const isColValid = !board.map((row) => row[col]).includes(value);

  if (isRowValid === false || isColValid === false) return false;

  const subgridRowStart = Math.floor(row / 3) * 3;
  const subgridColStart = Math.floor(col / 3) * 3;

  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const rowToCheck = subgridRowStart + rowIdx;
      const colToCheck = subgridColStart + colIdx;
      const currentValue = board[rowToCheck][colToCheck];

      if (currentValue === value) return false;
    }
  }

  return true;
};
