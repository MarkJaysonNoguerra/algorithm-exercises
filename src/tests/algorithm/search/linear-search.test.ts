import { describe, expect, test } from "vitest";
import { linearSearch } from "../../../algorithm/search/linear-search";

const inputArray = [11, 4, 52, 36, 7, 238, 10, 12, 23, 66, 99];
describe("Test for linear search algorithm", () => {
  const trueCases = [11, 4, 238];

  trueCases.forEach((value) => {
    test(`passing ${value} should return true`, () => {
      expect(linearSearch(inputArray, value)).toBe(true);
    });
  });

  const falseCases = [1231, 151, 3, 100];
  falseCases.forEach((value) => {
    test(`passing ${value} should return false`, () => {
      expect(linearSearch(inputArray, value)).toBe(false);
    });
  });
});
