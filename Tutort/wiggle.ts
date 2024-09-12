export const wiggle = (arr: []) => {
  for (let i = 0; i < arr.length; i++) {
    if (
      (i % 2 == 1 && arr[i] < arr[i - 1]) ||
      (i % 2 == 0 && arr[i] > arr[i - 1])
    ) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
  }
  return arr;
};

// [3, 5, 2, 1, 6, 4]
