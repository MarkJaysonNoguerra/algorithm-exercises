export const linearSearch = (list: number[], value: number): boolean => {
  for (const item of list) {
    if (item === value) {
      return true;
    }
  }

  return false;
};
