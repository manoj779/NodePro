/* 
https://leetcode.com/problems/contains-duplicate-iii/

You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.
 

Example 1:

Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
Example 2:

Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false. */

// BruteForce Approach..

/* const containsDuplicate = (
  inputArray: [],
  indexDff: number,
  valueDiff: number
): boolean => {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (
        Math.abs(i - j) <= indexDff &&
        Math.abs(inputArray[i] - inputArray[j]) <= valueDiff
      ) {
        return true;
      }
    }
  }
  return false;
};

module.exports = { containDuplicate: containsDuplicate }; */

/* Further we can optimize it by using hash map=>  

The inner loop that iterates from -valueDiff to valueDiff is used to check for values within the specified value difference range. The purpose of this loop is to ensure that we are considering all possible values that could be within the allowed value difference from the current value.

Let's break down the purpose and logic behind this inner loop:

Purpose of the Inner Loop:
Value Difference Check: For each element in the array, we need to check if there exists another element within the specified value difference (valueDiff). This means we need to consider all values that are within currentValue - valueDiff to currentValue + valueDiff.

Efficient Lookup: By using a hash map (valueToIndexMap), we can quickly check if any of these potential values have been seen before and, if so, whether they satisfy the index difference constraint.

Logic Behind the Inner Loop:
Range Calculation: For a given currentValue, the possible values that could be within the allowed value difference are calculated by iterating from currentValue - valueDiff to currentValue + valueDiff.
Map Lookup: For each potential value (targetValue), we check if it exists in the map. If it does, we retrieve its index and check if the index difference is within the allowed range (indexDff).
Example:
Let's consider the example with inputArray = [1, 5, 9, 1, 5, 9], indexDff = 2, and valueDiff = 3.

For currentValue = 1 (at index 0):

The possible values within the value difference of 3 are -2, -1, 0, 1, 2, 3, 4.
We check if any of these values exist in the map and if their index difference is within 2.
For currentValue = 5 (at index 1):

The possible values within the value difference of 3 are 2, 3, 4, 5, 6, 7, 8.
We check if any of these values exist in the map and if their index difference is within 2.
Dry Run with Explanation:
Let's revisit the dry run with a focus on the inner loop:

Initialization:

valueToIndexMap is an empty map.
First Iteration (i = 0):

currentValue = inputArray[0] = 1
Inner loop (diff from -3 to 3):
targetValue = 1 - 3 = -2 (not in map)
targetValue = 1 - 2 = -1 (not in map)
targetValue = 1 - 1 = 0 (not in map)
targetValue = 1 + 0 = 1 (not in map)
targetValue = 1 + 1 = 2 (not in map)
targetValue = 1 + 2 = 3 (not in map)
targetValue = 1 + 3 = 4 (not in map)
Update map: valueToIndexMap.set(1, 0)
Map: {1: 0}
Second Iteration (i = 1):

currentValue = inputArray[1] = 5
Inner loop (diff from -3 to 3):
targetValue = 5 - 3 = 2 (not in map)
targetValue = 5 - 2 = 3 (not in map)
targetValue = 5 - 1 = 4 (not in map)
targetValue = 5 + 0 = 5 (not in map)
targetValue = 5 + 1 = 6 (not in map)
targetValue = 5 + 2 = 7 (not in map)
targetValue = 5 + 3 = 8 (not in map)
Update map: valueToIndexMap.set(5, 1)
Map: {1: 0, 5: 1}
Third Iteration (i = 2):

currentValue = inputArray[2] = 9
Inner loop (diff from -3 to 3):
targetValue = 9 - 3 = 6 (not in map)
targetValue = 9 - 2 = 7 (not in map)
targetValue = 9 - 1 = 8 (not in map)
targetValue = 9 + 0 = 9 (not in map)
targetValue = 9 + 1 = 10 (not in map)
targetValue = 9 + 2 = 11 (not in map)
targetValue = 9 + 3 = 12 (not in map)
Update map: valueToIndexMap.set(9, 2)
Map: {1: 0, 5: 1, 9: 2}
Fourth Iteration (i = 3):

currentValue = inputArray[3] = 1
Inner loop (diff from -3 to 3):
targetValue = 1 - 3 = -2 (not in map)
targetValue = 1 - 2 = -1 (not in map)
targetValue = 1 - 1 = 0 (not in map)
targetValue = 1 + 0 = 1 (in map)
targetIndex = valueToIndexMap.get(1) = 0
Math.abs(3 - 0) = 3 (not <= indexDff = 2)
targetValue = 1 + 1 = 2 (not in map)
targetValue = 1 + 2 = 3 (not in map)
targetValue = 1 + 3 = 4 (not in map)
Update map: valueToIndexMap.set(1, 3)
Map: {1: 3, 5: 1, 9: 2}
Fifth Iteration (i = 4):

currentValue = inputArray[4] = 5
Inner loop (diff from -3 to 3):
targetValue = 5 - 3 = 2 (not in map)
targetValue = 5 - 2 = 3 (not in map)
targetValue = 5 - 1 = 4 (not in map)
targetValue = 5 + 0 = 5 (in map)
targetIndex = valueToIndexMap.get(5) = 1
Math.abs(4 - 1) = 3 (not <= indexDff = 2)
targetValue = 5 + 1 = 6 (not in map)
targetValue = 5 + 2 = 7 (not in map)
targetValue = 5 + 3 = 8 (not in map)
Update map: valueToIndexMap.set(5, 4)
Map: {1: 3, 5: 4, 9: 2}
Sixth Iteration (i = 5):

currentValue = inputArray[5] = 9
Inner loop (diff from -3 to 3):
targetValue = 9 - 3 = 6 (not in map)
targetValue = 9 - 2 = 7 (not in map)
targetValue = 9 - 1 = 8 (not in map)
targetValue = 9 + 0 = 9 (in map)
targetIndex = valueToIndexMap.get(9) = 2
Math.abs(5 - 2) = 3 (not <= indexDff = 2)
targetValue = 9 + 1 = 10 (not in map)
targetValue = 9 + 2 = 11 (not in map)
targetValue = 9 + 3 = 12 (not in map)
Update map: valueToIndexMap.set(9, 5)
Map: {1: 3, 5: 4, 9: 5}
Since no valid pair was found within the specified index and value differences, the function returns false.

Conclusion:
The inner loop ensures that we check all possible values within the allowed value difference range, making the function efficient and correct.
*/

const containsDuplicate = (nums: [], indexDiff: number, valueDiff: number) => {
  const valueToIndexMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    for (let diff = -valueDiff; diff <= valueDiff; diff++) {
      let targetValue = currentValue + diff;
      if (valueToIndexMap.has(targetValue)) {
        let targetIndex = valueToIndexMap.get(targetValue)!;
        if (Math.abs(targetIndex - i) <= indexDiff) {
          return true;
        }
      }
    }
    valueToIndexMap.set(currentValue, i);
  }
  return false;
};
