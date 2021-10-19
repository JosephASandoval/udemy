const firstDuplicateValue = (array) => {
  for (const value of array) {
    const absValue = Math.abs(value);
    const mappedIdx = absValue - 1
    if (array[mappedIdx] < 0) return absValue;
    array[mappedIdx] *= -1;
  }
  return -1;
};
