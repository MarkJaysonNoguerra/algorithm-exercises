import { binaryTreePostOrder } from "../../../algorithm/tree/binary-tree-post-order";
import { tree } from "../../../data-structure/tree";
import { describe, expect, test } from "vitest";

describe("Test for binary tree post order", () => {
    test("binary tree post order", () => {
        expect(binaryTreePostOrder(tree)).toEqual([
            7,
            5,
            15,
            10,
            29,
            45,
            30,
            100,
            50,
            20,
        ])
    });
})
