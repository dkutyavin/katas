/**
 * @param {Array<Array<number>>} matrix
 * @description Given an N x N array, return the array elements arranged
 * from outermost elements to the middle element, traveling clockwise.
 * @see https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
 */

function snailSort(matrix: Array<Array<number>>) {
  if (!isSquareMatrix(matrix)) throw new Error("Matrix should be square");

  return [];
}

function isSquareMatrix(matrix: Array<Array<unknown>>): boolean {
  const matrixLength = matrix.length;
  return matrix.every(row => row.length === matrixLength);
}

module.exports = snailSort;
