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
    const jumpCount = Math.floor(Math.sqrt(input.length));
    
    let i = jumpCount;
    for (; i < input.length; i+=jumpCount) {
        if (input[i]) {
            break;
        }
    }

    for(let j = i - jumpCount; j < i && j < input.length; j++) {
        if (input[j]) {
            return j;
        }
    }

    return -1;
}
