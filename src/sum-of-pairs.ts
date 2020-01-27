/**
 * @description Given a list of integers and a single sum value, return the first two values (parse from the left) in order of appearance that add up to form the sum.
 * @see https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
 */

export const sumPairs = (numbers: Array<number>, sum: number) => {
  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];

    const arr = numbers.filter((it, index) => it + n === sum && index !== i);
    if (arr.length) return [n, arr[0]];
  }
};
