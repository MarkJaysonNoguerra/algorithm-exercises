export const binarySearch = (list: number[], value: number): boolean => {

    let low = 0;
    let high = list.length;

    while(low < high) {
        const middle = Math.floor(low + ((high - low) / 2))
        const middleValue = list[middle];

        if (middleValue === value) {
            return true;
        } else if (value > middleValue) {
            low = middle + 1;
        } else {
            high = middle
        }
    }
    return false;
}