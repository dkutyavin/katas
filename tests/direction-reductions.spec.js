const {
  dirReduc,
  simplify,
  simplified,
} = require("../src/direction-reduction");

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

  describe("Simplified predicate", () => {
    it("Should return true on empty array", () => {
      expect(simplified([])).toBe(true);
    });

    it("Shoult return false on array with two opposite directions", () => {
      expect(simplified(["EAST", "WEST"])).toBe(false);
    });

    it("Should be true", () => {
      const noDirectlyOpposites = ["EAST", "NORTH", "WEST", "SOUTH"];
      expect(simplified(noDirectlyOpposites)).toBe(true);
    });

    it("Should be false", () => {
      const toTest = ["EAST", "NORTH", "WEST", "EAST", "SOUTH"];
      expect(simplified(toTest)).toBe(false);
    });
  });

  describe("Simplify helper", () => {
    it("Should return empty array on empty array", () => {
      expect(simplify([])).toEqual([]);
    });

    it("When given an array of the same directions, should return it back", () => {
      const toTest = Array(100).fill("WEST");
      expect(simplify(toTest)).toEqual(toTest);
    });

    it("Should simplify array of two opposite directions to empty", () => {
      expect(simplify(["EAST", "WEST"])).toEqual([]);
    });

    it("Should simplify opposite directions, divided by another opposites, to empty with two iterations", () => {
      // Arrange
      const toTest = ["EAST", "NORTH", "SOUTH", "WEST"];

      // Act
      const firstStep = simplify(toTest);
      const secondStep = simplify(firstStep);

      // Assert
      expect(simplify(toTest)).toEqual(["EAST", "WEST"]);
      expect(simplify(firstStep)).toEqual([]);
    });
  });
});
