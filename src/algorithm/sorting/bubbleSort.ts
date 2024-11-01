// O(n squared)
export const bubbleSort = (input: number[]): number[] => {
    for (let a = 0; a < input.length; a++) {
        for (let b = a+1; b < input.length; b++) {
             if (input[a] > input[b]) {
                const temp = input[a];
                input[a] = input[b];
                input[b] = temp;
             }
        }
    }

    return input;
}