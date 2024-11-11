import { describe, expect, test } from "vitest";
import { addNumber } from "../../recursion/add-number";

describe("Test for add-number", () => {
  test("add number 5", () => {
    // 1 + 2 + 3 + 4 + 5;
    expect(addNumber(5)).toEqual(15);
  });

  test("add number test for 100", () => {
    // ((number + 1) * (number / 2))
    expect(addNumber(100)).toEqual(5050);
  });

  test("add number test for 49", () => {
    // ((number + 1) * (number / 2))
    expect(addNumber(49)).toEqual(1225);
  });
});
