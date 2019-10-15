const pathFinder = require("../path-finder");

describe("Tesint path finder", () => {
  it("should be true", () => {
    const maze = `.W.
                  .W.
                  ...`;

    expect(pathFinder(maze)).toBe(true);
  });

  it("should be false on blocked maze", () => {
    const maze = `.W.
                  .W.
                  W..`;

    expect(pathFinder(maze)).toBe(false);
  });

  it("should be true on empty maze", () => {
    const maze = `......
                  ......
                  ......
                  ......
                  ......
                  ......`;

    expect(pathFinder(maze)).toBe(true);
  });

  it("should be false on maze with blocked exit", () => {
    const maze = `......
                  ......
                  ......
                  ......
                  .....W
                  ....W.`;
    expect(pathFinder(maze)).toBe(false);
  });
});
