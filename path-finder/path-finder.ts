/**
 * @see https://www.codewars.com/kata/path-finder-number-1-can-you-reach-the-exit/train/javascript
 * You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions 
 * (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.
 * Empty positions are marked .. Walls are marked W. Start and exit positions are empty in all test cases.
 * 
 * Example: 
 * `.W.
    .W.
    ...`
    */

module.exports = (mazeInput: string) => {
  const maze = new Maze(mazeInput);

  const checked: Array<Position> = [];
  let toCheck: Array<Position> = [maze.ENTRANCE];

  while (toCheck.length > 0) {
    const testing = toCheck.pop();
    const neighbours = maze.neighbours(testing);
    const paths = maze.nonBlockedPositions(neighbours);

    if (paths.some(([x, y]) => x === maze.EXIT[0] && y === maze.EXIT[1]))
      return true;

    checked.push(testing);

    toCheck.push(
      ...paths.filter(it => {
        return !checked.some(([x, y]) => it[0] === x && it[1] === y);
      })
    );
  }
  return false;
};

class Maze {
  maze: Array<Array<string>>;
  ENTRANCE: Position = [0, 0];
  EXIT: Position;

  constructor(mazeInput: string) {
    const rows = mazeInput.split("\n");
    const cells = rows.map(row => row.replace(/\s/g, "").split(""));

    this.maze = cells;
    this.EXIT = [this.maze.length - 1, this.maze.length - 1];
  }

  neighbours([x, y]: Position) {
    const neighbourPositions: Position[] = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];

    return neighbourPositions.filter(
      ([x, y]) =>
        x >= 0 && x < this.maze.length && y >= 0 && y < this.maze.length
    );
  }

  nonBlockedPositions(positions: Position[]) {
    return positions.filter(([x, y]) => this.maze[x][y] !== "W");
  }
}

type Position = [number, number];
