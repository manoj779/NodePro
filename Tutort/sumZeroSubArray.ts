export const subarrayWithSumZero = (arr: []) => {};
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (sum == 0) {
    return true;
  } else return false;
}
