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
  return [snailCollectBorder(matrix), cutBorder(matrix)];
}

function snailCollectBorder(matrix: Matrix): Array<number> {
  const firstRow = matrix[0];
  const lastRow = matrix[matrix.length - 1];

  const firstColumn = matrix.map(row => row[0]);
  const lastColumn = matrix.map(row => row[row.length - 1]);

  return [
    ...firstRow,
    ...lastColumn.slice(1),
    ...[...lastRow].reverse().slice(1),
    ...[...firstColumn].reverse().slice(1, -1)
  ];
}

function cutBorder(matrix: Matrix): Matrix {
  return matrix.slice(1, -1).map(row => row.slice(1, -1));
}

type Matrix = Array<Array<number>>;
