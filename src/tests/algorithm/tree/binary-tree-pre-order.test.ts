import { binaryTreePreOrder } from "../../../algorithm/tree/binary-tree-pre-order";
import { tree } from "../../../data-structure/tree";
import { describe, expect, test } from "vitest";

describe("Test for binary tree pre order", () => {
  test("binary tree pre order", () => {
    expect(binaryTreePreOrder(tree)).toEqual([
      20,
      10,
      5,
      7,
      15,
      50,
      30,
      29,
      45,
      100,
    ])
  });
})
