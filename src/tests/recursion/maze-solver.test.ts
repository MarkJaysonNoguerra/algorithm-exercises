import { describe, expect, test } from "vitest";
import { mazeSolver } from "../../recursion/maze-solver";

describe("Test for maze-solver", () => {
  test("simple maze test", () => {
    const maze = [
      ["#", "", "#", "#", "", "#"],
      ["#", "", "", "#", "", "#"],
      ["#", "", "", "#", "", "#"],
      ["", "", "#", "#", "", "#"],
      ["", "", "", "", "", "#"],
      ["#", "", "#", "#", "#", "#"],
    ];

    const solvedPath = mazeSolver(maze, "#", { x: 4, y: 0 }, { x: 1, y: 5 });
    expect(solvedPath).toStrictEqual([
      { x: 4, y: 0 },
      { x: 4, y: 1 },
      { x: 4, y: 2 },
      { x: 4, y: 3 },
      { x: 4, y: 4 },
      { x: 3, y: 4 },
      { x: 2, y: 4 },
      { x: 1, y: 4 },
      { x: 1, y: 5 },
    ]);
  });
});
