const {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
} = require("../src/function-calc");

describe("Calculating with Functions ", () => {
  it("Seven times five should be 35", () =>
    expect(seven(times(five()))).toBe(35));

  it("Four plus nine should be 13", () => expect(four(plus(nine()))).toBe(13));

  it("Eight minus three should be 5", () =>
    expect(eight(minus(three()))).toBe(5));

  it("Six divided by two should be 3", () =>
    expect(six(dividedBy(two()))).toBe(3));
});
