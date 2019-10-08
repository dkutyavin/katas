/**
 * @description Given an N x N array, return the array elements arranged
 * from outermost elements to the middle element, traveling clockwise.
 * @see https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
 */

module.exports = snailSort;

function snailSort(matrix: Matrix): Array<number> {
  if (matrix.length === 0) return [];
  if (matrix.length === 1) return matrix[0];

  const [matrixBorder, matrixWithoutBorder] = separateBorderFromMatrix(matrix);
  return [...matrixBorder, ...snailSort(matrixWithoutBorder)];
}

function separateBorderFromMatrix(matrix: Matrix): [Array<number>, Matrix] {
  let border: Array<number> = [];
  let matrixWithoutBorder: Matrix = [...matrix];

  // get first row
  border = [...border, ...matrix[0]];
  matrixWithoutBorder = matrixWithoutBorder.slice(1);

  // get last column
  border = [...border, ...matrixWithoutBorder.map(row => row[row.length - 1])];
  matrixWithoutBorder = matrixWithoutBorder.map(row => {
    return row.slice(0, row.length - 1);
  });

  // get last row
  const lastRow = [...matrixWithoutBorder][
    matrixWithoutBorder.length - 1
  ].reverse();
  border = [...border, ...lastRow];
  matrixWithoutBorder = matrixWithoutBorder.slice(
    0,
    matrixWithoutBorder.length - 1
  );

  // get first column
  if (matrixWithoutBorder.length === 0) return [border, matrixWithoutBorder];

  const firstColumn = [...matrixWithoutBorder].reverse().map(row => row[0]);
  border = [...border, ...firstColumn];
  matrixWithoutBorder = matrixWithoutBorder.map(row => {
    return row.slice(1);
  });

  return [border, matrixWithoutBorder];
}

type Matrix = Array<Array<number>>;
