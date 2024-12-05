/**
 * You have a two ball you need to figure out what is 
 * the most efficient way of figuring out the minimum floor the 
 * ball would break (your constraint is you only have two ball 
 * meaning you only have 2 attempt in seeing a true value from the
 * input.) 
 * 
 * Possible answer: O(n) using linear search or modified binary search
 * 
 * The best answer is: O(square root of n)
 * 
 * ex: ([false, false, false true true])
 * answer: 3
 */
export const crystalBallProblem = (input: boolean[]): number => {
    const sqrtIndex = Math.floor(Math.sqrt(input.length - 1));
    let index = sqrtIndex;

    while (index < input.length) {
        if (input[index]) {
            for (let i = index - sqrtIndex; i <= index && i < input.length; i++) {
                if (input[i]) {
                    return i;
                }
            }
        }

        index += sqrtIndex;
    }
    return -1;
}
