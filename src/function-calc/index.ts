/**
 * @description This time we want to write calculations using functions and get the results. 
 *              Let's have a look at some examples:
 *              ```
                  seven(times(five())); // must return 35
                  four(plus(nine())); // must return 13
                  eight(minus(three())); // must return 5
                  six(dividedBy(two())); // must return 3
                ```
 * @see https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
 */

const number = value => operation => (operation ? operation(value) : value);
const operation = fn => right => left => fn(left, right);

export const zero = number(0);
export const one = number(1);
export const two = number(2);
export const three = number(3);
export const four = number(4);
export const five = number(5);
export const six = number(6);
export const seven = number(7);
export const eight = number(8);
export const nine = number(9);

export const plus = operation((left, right) => left + right);
export const minus = operation((left, right) => left - right);
export const times = operation((left, right) => left * right);
export const dividedBy = operation((left, right) => Math.floor(left / right));
