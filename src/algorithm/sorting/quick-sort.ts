const qs = (input: number[], low: number, high: number) => {

  if (low < high) {

    const pivotIndex = partition(input, low, high);

    qs(input, low, pivotIndex - 1);
    qs(input, pivotIndex + 1, high);
  }

}

const partition = (input: number[], low: number, high: number) => {

  const pivot = input[high];

  let index = low - 1;

  for (let i = low; i <= high - 1; i++) {
    if (input[i] < pivot) {
      index++;
      const temp = input[i];
      input[i] = input[index];
      input[index] = temp;
    }
  }

  index++;
  input[high] = input[index];
  input[index] = pivot;
  return index;
}


export const quickSort = (input: number[]): number[] => {

  qs(input, 0, input.length - 1);

  return input;
};
