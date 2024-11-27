/* 
1461. Check If a String Contains All Binary Codes of Size K
Medium
Topics
Companies
Hint
Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.

 

Example 1:

Input: s = "00110110", k = 2
Output: true
Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.
Example 2:

Input: s = "0110", k = 1
Output: true
Explanation: The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring. 
Example 3:

Input: s = "0110", k = 2
Output: false
Explanation: The binary code "00" is of length 2 and does not exist in the array.
*/

/* export function hasAllCodes(s: string, k: number): boolean {
  if (s.length < k) return false;
  let binaryCodes = generateBinaryCodes(k);
  const countS1 = new Map<string, number>();

  // Initialize the map with all binary codes set to 0
  binaryCodes.forEach((code) => {
    countS1.set(code, 0);
  });

  // Count the occurrences of each binary code in the string s
  for (let i = 0; i <= s.length - k; i++) {
    const substring = s.substring(i, i + k);
    if (countS1.has(substring)) {
      countS1.set(substring, (countS1.get(substring) || 0) + 1);
    }
  }
  // Check if all binary codes are present
  for (const count of countS1.values()) {
    if (count === 0) {
      return false;
    }
  }

  return true;
}

export function generateBinaryCodes(k: number): string[] {
  const totalCombinations = 2 ** k; // Total number of combinations is 2^k

  const binaryCodes: string[] = [];

  for (let i = 0; i < totalCombinations; i++) {
    // console.log("i.toString(2)", i.toString(2));
    // console.log("i.toString(2).padStart(k, 0)", i.toString(2).padStart(k, "0"));
    let binaryString = i.toString(2).padStart(k, "0"); // Convert to binary and pad with zeros
    binaryCodes.push(binaryString);
  }

  return binaryCodes;
} */

// Example usage:
// const k = 2;
// const binaryCodes = generateBinaryCodes(k);
// console.log(binaryCodes); // Output: ['00', '01', '10', '11']

//OPtimised code:
export function hasAllCodes(s: string, k: number): boolean {
  const n = s.length;
  if (k > n) return false;

  const allCodes = new Set<string>();
  const totalCodes = 1 << k; // 2^k

  for (let i = 0; i <= n - k; i++) {
    const substring = s.substring(i, i + k);
    allCodes.add(substring);
  }
  console.log(allCodes);
  console.log(allCodes.size);

  return allCodes.size === totalCodes;
}
