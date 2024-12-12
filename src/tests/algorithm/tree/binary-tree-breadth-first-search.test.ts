import { binaryTreeBreadthFirstSearch } from "../../../algorithm/tree/binary-tree-breadth-first-search";
import { tree } from "../../../data-structure/tree";
import { describe, expect, test } from "vitest";

describe("Test for binary tree breadth first search", () => {
    test("binary search in order", () => {
        expect(binaryTreeBreadthFirstSearch(tree, 45)).toEqual(true);
        expect(binaryTreeBreadthFirstSearch(tree, 7)).toEqual(true);
        expect(binaryTreeBreadthFirstSearch(tree, 69)).toEqual(false);
    });
})
