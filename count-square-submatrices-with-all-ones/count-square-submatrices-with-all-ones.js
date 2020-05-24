// Count Square Submatrices with All Ones
// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.



// Example 1:

// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation:
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.
// Example 2:

// Input: matrix =
// [
//   [1,0,1],
//   [1,1,0],
//   [1,1,0]
// ]
// Output: 7
// Explanation:
// There are 6 squares of side 1.
// There is 1 square of side 2.
// Total number of squares = 6 + 1 = 7.


// Constraints:

// 1 <= arr.length <= 300
// 1 <= arr[0].length <= 300
// 0 <= arr[i][j] <= 1

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let squareCount = 0;
  let maxSize = Math.min(matrix[0].length, matrix.length)

  let validateSquare = (i, j, size) => {
    let validRows = 0;
    let row;
    while(validRows < size) {
      row = matrix[i].slice(j, j + size)
      if(row.indexOf(0) >= 0) return;
      validRows++;
      i++;
    }
    squareCount++;
  }

  let findSquares = size => {
      for(let i = 0; i < matrix.length - size + 1; i++) {
        for(let j = 0; j < matrix[i].length - size + 1; j++) {
          validateSquare(i, j, size)
        }
      }

      if(size === maxSize) return;

      size++;
      findSquares(size);
  }

  findSquares(1);
  return squareCount;
};

let grid = [
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0],
  [1, 1, 1, 0],
  [1, 1, 1, 0]
]
countSquares(grid)