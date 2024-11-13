export const addNumber = (value: number): number => {
  if (value === 1) {
    return 1;
  }

  return value + addNumber(value - 1);
};
