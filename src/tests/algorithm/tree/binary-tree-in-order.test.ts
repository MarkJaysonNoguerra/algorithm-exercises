import { binaryTreeInOrder } from "../../../algorithm/tree/binary-tree-in-order";
import { tree } from "../../../data-structure/tree";
import { describe, expect, test } from "vitest";

describe("Test for binary tree in order", () => {
    test("binary tree in order", () => {
        expect(binaryTreeInOrder(tree)).toEqual([
            5,
            7,
            10,
            15,
            20,
            29,
            30,
            45,
            50,
            100,
        ])
    });
})
