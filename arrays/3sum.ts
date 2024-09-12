/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

*/

// This implementation is based on BruteForce approach that has 3 sub loops implies
// TimeComplexity: O(n3)
//Space complexity : O(n)

export const ThreeSum = (arr: number[]) => {
  const hash = new Map();
  let sum = 0;
  let sotedArr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sum = 0;
        sotedArr = [arr[i], arr[j], arr[k]].sort();
        sum = arr[i] + arr[j] + arr[k];
        if (!hash.has(sotedArr)) {
          if (sum == 0) {
            hash.set(i, sotedArr);
          }
        }
      }
    }
  }
  hash.forEach((value, key) => {
    console.log(value);
  });
};

/*
Time Complexity
The time complexity of the provided ThreeSum function is 
O(n3)
O(n3 ), where n is the length of the input array. This is because there are three nested loops, each iterating through the array.

Space Complexity
The space complexity is 
O(n)
O(n) due to the usage of the Map to store unique triplets. The space required by the Map is proportional to the number of unique triplets found, which in the worst case can be 
O(n)

Improved Approach
The provided solution is not optimal. A more efficient approach to solve the 3-sum problem is to use sorting and a two-pointer technique, which can reduce the time complexity to 
O(n2). Here's a brief outline of the improved approach:

Sort the array.
Iterate through the array with a fixed element.
Use two pointers to find pairs that sum to the negative of the fixed element.
This approach significantly improves the performance for large input sizes.
*/
