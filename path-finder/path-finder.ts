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

module.exports = (maze: string): boolean => {
  /*
  let checked = []
  let toCheck = [START]
  while (toCheck.length > 0) {
    let testing = toCheck.pop()
    let availablePositions = getAvaliablePositions(testing).filterOut(checked)
    checked = [...checked, testing]
    
    if(END in availablePositions) return true

    toCheck = [...toCheck, ...availablePositions]
  }
  */

  return false;
};

/*
function getAvailablePositions(position, maze)
  const EMPTY = ".";
  const WALL = "W";

  
*/