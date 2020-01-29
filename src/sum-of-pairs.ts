/**
 * @description Given a list of integers and a single sum value, return the first two values (parse from the left) in order of appearance that add up to form the sum.
 * @see https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
 */

export const sumPairs = (numbers: Array<number>, sum: number) => {
  const map = {};
  for (let index = 0; index < numbers.length; index++) {
    const n = numbers[index];
    if (map[sum - n]) return [sum - n, n];
    map[n] = true;
  }
};
