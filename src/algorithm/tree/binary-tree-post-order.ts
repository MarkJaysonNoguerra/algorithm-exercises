import { BinaryNode } from "../../data-structure/tree";

const btPostOrder = (tree: BinaryNode<number> | null, paths: number[]): number[] => {
    if (tree === null) {
        return paths;
    }

    btPostOrder(tree.left, paths);
    btPostOrder(tree.right, paths);
    paths.push(tree.value);

    return paths;
}

export const binaryTreePostOrder = (tree: BinaryNode<number>): number[] => {
    return btPostOrder(tree, []);
}