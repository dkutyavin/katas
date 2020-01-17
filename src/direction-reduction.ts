/**
  @see https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
  @description Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
 */

export const dirReduc = (directions: Directions): Directions => {
  let result = [...directions];

  while (!simplified(result)) result = simplify(result);

  return result;
};

export const simplify = (aPath: Directions): Directions => {
  const result = [];
  for (let i = 0, j = 1; i < aPath.length; i++, j++) {
    if (!isOpposite(aPath[i], aPath[j])) {
      result.push(aPath[i]);
    } else {
      i++;
      j++;
    }
  }
  return result;
};

export const simplified = (aPath: Directions): boolean => {
  for (let i = 0, j = 1; j < aPath.length; i++, j++) {
    if (isOpposite(aPath[i], aPath[j])) return false;
  }
  return true;
};

const isOpposite = (dir1: Direction, dir2: Direction) => {
  const opposites: Record<Direction, Direction> = {
    EAST: "WEST",
    WEST: "EAST",
    NORTH: "SOUTH",
    SOUTH: "NORTH",
  };

  return dir2 === opposites[dir1];
};

type Directions = Array<Direction>;
type Direction = "NORTH" | "SOUTH" | "EAST" | "WEST";
