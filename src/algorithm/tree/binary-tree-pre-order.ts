import { BinaryNode } from "../../data-structure/tree";

const btPreOrder = (tree: BinaryNode<number> | null, paths: number[]): number[] => {
    if (tree === null) {
        return paths;
    }

    paths.push(tree.value);
    btPreOrder(tree.left, paths);
    btPreOrder(tree.right, paths);

    return paths;
}

export const binaryTreePreOrder = (tree: BinaryNode<number>): number[] => {
    return btPreOrder(tree, []);
}