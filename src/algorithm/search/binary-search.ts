export const binarySearch = (list: number[], value: number): boolean => {
  if (list.length === 0) {
    return false;
  }

  const middle = Math.floor(list.length / 2);
  if (list[middle] === value) {
    return true;
  } else if (list[middle] > value) {
    return binarySearch(list.slice(0, middle), value)
  } else {
    return binarySearch(list.slice(middle + 1), value);
  }
};
