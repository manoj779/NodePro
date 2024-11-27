/* 
438. Find All Anagrams in a String
Medium
Topics
Companies
Given two strings s and p, return an array of all the start indices of p's 
anagrams
 in s. You may return the answer in any order.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.
*/

import { count } from "console";

/* export function findAnagrams(s: string, p: string): number[] {
  let anagramIndexes = [];
  for (let i = 0; i <= s.length - p.length; i++) {
    let substring = s.substring(i, i + p.length);

    if (substring.split("").sort().join() === p.split("").sort().join()) {
      anagramIndexes.push(i);
    }
  }
  return anagramIndexes;
}
 */

/* ("cbaebabacd", "abc") */

export function findAnagrams(s: string, p: string): number[] {
  let counter = [];

  let sSet = new Array(26).fill(0);
  let pSet = new Array(26).fill(0);

  for (let char of p) {
    pSet[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  console.log("pSet: ", pSet);
  for (let i = 0; i < p.length; i++) {
    sSet[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  //check the initial window
  if (arraysEqual(sSet, pSet)) {
    counter.push(0);
  }

  for (let i = p.length; i < s.length; i++) {
    //Add the new character to the window:
    sSet[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    //Remove the old character from the window:
    sSet[s.charCodeAt(i - p.length) - "a".charCodeAt(0)]--;

    if (arraysEqual(sSet, pSet)) {
      counter.push(i - p.length + 1);
    }
  }

  return counter;
}

function arraysEqual(arr1: string[], arr2: string[]) {
  console.log(arr1 + " : " + arr2);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

/* main.ts
import { findAnagrams } from "./LeetCode_GeekForGeek/SlidingWindow/LC_438";

console.log(findAnagrams("cbaebabcba", "abc"));
 */
