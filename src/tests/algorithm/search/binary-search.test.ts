import { describe, expect, test } from "vitest";
import { binarySearch } from "../../../algorithm/search/binary-search";

const sortedArray = [1, 4, 5, 6, 7, 8, 10, 12, 23, 66, 99];
describe("Test for binary search algorithm", () => {
  const trueCases = [8, 10, 23, 99, 1, 66];
  trueCases.forEach((value) => {
    test(`passing ${value} should return true`, () => {
      expect(binarySearch(sortedArray, value)).toBe(true);
    });
  });

  const falseCases = [1231, 151, 3, 11];
  falseCases.forEach((value) => {
    test(`passing ${value} should return false`, () => {
      expect(binarySearch(sortedArray, value)).toBe(false);
    });
  });
});
