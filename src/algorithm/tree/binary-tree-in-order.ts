import { BinaryNode } from "../../data-structure/tree";

const btInOrder = (tree: BinaryNode<number> | null, paths: number[]): number[] => {
    if (tree === null) {
        return paths;
    }

    btInOrder(tree.left, paths);
    paths.push(tree.value);
    btInOrder(tree.right, paths);

    return paths;
}

export const binaryTreeInOrder = (tree: BinaryNode<number>): number[] => {
    return btInOrder(tree, []);
}