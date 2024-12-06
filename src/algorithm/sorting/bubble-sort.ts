// O(n squared)
export const bubbleSort = (input: number[]): number[] => {

    for (let i = 0; i < input.length; i++) {
        for (let k = 0; k < input.length - i; k++) {
            if (input[k] > input[k+1]) {
                const temp = input[k];
                input[k] = input[k+1];
                input[k+1] = temp;
            }
        }
    }

    return input;
};
