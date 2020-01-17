/**
  @see https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
  @description Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
 */

export const dirReduc = (directions: Directions): Directions =>
  directions.reduce((result, direction) => {
    if (isOpposite(direction, result[result.length - 1])) {
      result.pop();
    } else result.push(direction);

    return result;
  }, []);

const isOpposite = (dir1: Direction, dir2: Direction) => {
  return dir2 === opposites[dir1];
};

const opposites: Record<Direction, Direction> = {
  EAST: "WEST",
  WEST: "EAST",
  NORTH: "SOUTH",
  SOUTH: "NORTH",
};

type Directions = Array<Direction>;
type Direction = "NORTH" | "SOUTH" | "EAST" | "WEST";
