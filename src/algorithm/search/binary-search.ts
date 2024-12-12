
export const binarySearch = (list: number[], value: number): boolean => {
  let low = 0;
  let high = list.length;

  while (low <= high) {
    let middle = low + Math.floor((high - low) / 2);

    if (list[middle] === value) {
      return true;
    } else if (list[middle] < value) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return false;
};
