/* 
567. Permutation in String
Solved
Medium
Topics
Companies
Hint
Given two strings s1 and s2, return true if s2 contains a 
permutation
 of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const countS1 = new Array(26).fill(0);
  const countS2 = new Array(26).fill(0);

  // Initialize the frequency count for s1
  for (let i = 0; i < s1.length; i++) {
    countS1[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // Initialize the frequency count for the first window in s2
  for (let i = 0; i < s1.length; i++) {
    countS2[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // Check if the first window matches s1
  if (arraysEqual(countS1, countS2)) {
    return true;
  }

  // Slide the window over s2
  for (let i = s1.length; i < s2.length; i++) {
    countS2[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
    countS2[s2.charCodeAt(i - s1.length) - "a".charCodeAt(0)]--;

    if (arraysEqual(countS1, countS2)) {
      return true;
    }
  }

  return false;
}

function arraysEqual(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(arr1[i] + ":" + arr2[i]);
      return false;
    }
  }
  return true;
}

// Example usage:
const s1 = "ab";
const s2 = "eidbaooo";
console.log(checkInclusion(s1, s2)); // Output: true

const s1_2 = "ab";
const s2_2 = "eidboaoo";
console.log(checkInclusion(s1_2, s2_2)); // Output: false
