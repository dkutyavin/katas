/**
 * Write a program that will calculate the number of
 * trailing zeros in a factorial of a given number.
 * @see https://www.codewars.com/kata/number-of-trailing-zeros-of-n/train/javascript
 */

export default function zeros(n: number): number {
  const highestFivePower = n >= 5 ? Math.log(n) / Math.log(5) : 0;

  let result = 0;
  for (let i = 1; i <= highestFivePower; i++) {
    result += Math.floor(n / 5 ** i);
  }

  return result;
}
