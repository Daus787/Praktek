function solve(mixedUpBoard, solvedBoard) {
  const rows = mixedUpBoard.length;
  const cols = mixedUpBoard[0].length;
  const moves = [];

  // Helper function to check if boards are equal
  function boardsAreEqual(board1, board2) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (board1[i][j] !== board2[i][j]) return false;
      }
    }
    return true;
  }

  // Function to apply a row move (left or right)
  function moveRow(board, rowIndex, direction) {
    if (direction === "L") {
      const firstElement = board[rowIndex].shift();
      board[rowIndex].push(firstElement);
    } else if (direction === "R") {
      const lastElement = board[rowIndex].pop();
      board[rowIndex].unshift(lastElement);
    }
  }

  // Function to apply a column move (up or down)
  function moveColumn(board, colIndex, direction) {
    const columnValues = board.map((row) => row[colIndex]);

    if (direction === "U") {
      const firstElement = columnValues.shift();
      columnValues.push(firstElement);
    } else if (direction === "D") {
      const lastElement = columnValues.pop();
      columnValues.unshift(lastElement);
    }

    // Update the board with the new column values
    for (let i = 0; i < rows; i++) {
      board[i][colIndex] = columnValues[i];
    }
  }

  // Core solving logic (for demonstration purposes only, requires optimization)
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const targetValue = solvedBoard[i][j];
      for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
          if (mixedUpBoard[x][y] === targetValue) {
            // Bring element to the correct row
            while (x !== i) {
              if (x < i) {
                moveColumn(mixedUpBoard, y, "D");
                moves.push(`D${y}`);
                x++;
              } else {
                moveColumn(mixedUpBoard, y, "U");
                moves.push(`U${y}`);
                x--;
              }
            }
            // Bring element to the correct column
            while (y !== j) {
              if (y < j) {
                moveRow(mixedUpBoard, x, "R");
                moves.push(`R${x}`);
                y++;
              } else {
                moveRow(mixedUpBoard, x, "L");
                moves.push(`L${x}`);
                y--;
              }
            }
          }
        }
      }
    }
  }

  return boardsAreEqual(mixedUpBoard, solvedBoard) ? moves : null;
}

// Contoh penggunaan
const mixedUpBoard = [
  ["D", "E", "A", "B", "C"],
  ["F", "G", "H", "I", "J"],
  ["K", "L", "M", "N", "O"],
  ["P", "Q", "R", "S", "T"],
  ["U", "V", "W", "X", "Y"],
];

const solvedBoard = [
  ["A", "B", "C", "D", "E"],
  ["F", "G", "H", "I", "J"],
  ["K", "L", "M", "N", "O"],
  ["P", "Q", "R", "S", "T"],
  ["U", "V", "W", "X", "Y"],
];

console.log(solve(mixedUpBoard, solvedBoard));
