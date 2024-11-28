const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = [];

  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  for (; leftIndex < left.length; leftIndex++) {
    result.push(left[leftIndex]);
  }
  for (; rightIndex < right.length; rightIndex++) {
    result.push(right[rightIndex]);
  }

  return result;
};

export const mergeSort = (input: number[]): number[] => {
  if (input.length <= 1) {
    return input;
  }

  const middle = Math.floor(input.length / 2);
  return merge(
    mergeSort(input.slice(0, middle)),
    mergeSort(input.slice(middle))
  );
};
