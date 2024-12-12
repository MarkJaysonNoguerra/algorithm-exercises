import { BinaryNode } from "../../data-structure/tree";

export const binaryTreeBreadthFirstSearch = (tree: BinaryNode<number>, value: number): boolean => {

    const paths: Array<BinaryNode<number> | null> = [tree];

    while (paths.length > 0) {
        const currentNode = paths.shift();
        if (currentNode === null) {
            continue;
        }

        if (currentNode!.value === value) {
            return true;
        }

        paths.push(currentNode!.left);
        paths.push(currentNode!.right);
    }

    return false;
}