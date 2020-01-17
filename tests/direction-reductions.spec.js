const { dirReduc } = require("../src/direction-reduction");

describe("Direction Reduction", () => {
  describe("Basic specs", () => {
    it("When direction array is empty, should return empty array", () => {
      expect(dirReduc([])).toEqual([]);
    });

    it("When there are simplified directions, should return given array", () => {
      const noDirectlyOpposites = ["EAST", "NORTH", "WEST", "SOUTH"];
      expect(dirReduc(noDirectlyOpposites)).toEqual(noDirectlyOpposites);
    });

    it("When there are only two opposite directions, should return empty array", () => {
      expect(dirReduc(["EAST", "WEST"])).toEqual([]);
    });

    it(
      "When there are two opposite directions" +
        "divided by another two opposite directions," +
        "should return empty array",
      () => {
        expect(dirReduc(["NORTH", "EAST", "WEST", "SOUTH"])).toEqual([]);
      }
    );
  });

  describe("Additional checks", () => {
    it("", () => {
      // Arrange
      const toTest = [
        "NORTH",
        "SOUTH",
        "SOUTH",
        "EAST",
        "WEST",
        "NORTH",
        "WEST",
      ];

      // Act
      const path = dirReduc(toTest);

      // Assert
      expect(path).toEqual(["WEST"]);
    });

    it("", () => {
      // Arrange
      const toTest = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"];

      // Act
      const path = dirReduc(toTest);

      // Assert
      expect(path).toEqual([]);
    });
  });
});
