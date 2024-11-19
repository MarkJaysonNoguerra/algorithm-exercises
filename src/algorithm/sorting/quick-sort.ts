const qs = (input: number[], low: number, high: number) => {
  if (low >= high) {
    return;
  }

  const pivot = partition(input, low, high);
  qs(input, low, pivot - 1); // left
  qs(input, pivot + 1, high); // right
};

// pivot
// short left side <= pivot
const partition = (input: number[], low: number, high: number) => {
  const pivot = input[high];
  let currentIndex = low - 1;

  for (let i = low; i < high; i++) {
    if (input[i] <= pivot) {
      currentIndex++;
      const tmp = input[i];
      input[i] = input[currentIndex];
      input[currentIndex] = tmp;
    }
  }

  currentIndex++;
  input[high] = input[currentIndex];
  input[currentIndex] = pivot;

  return currentIndex;
};

// worse O(n squared) // best O(n log n)
export const quickSort = (input: number[]): number[] => {
  qs(input, 0, input.length - 1);

  return input;
};
