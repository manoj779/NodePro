/* 
8. String to Integer (atoi)
Medium
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.

 

Example 1:

Input: s = "42"

Output: 42

Explanation:

The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
Example 2:

Input: s = " -042"

Output: -42

Explanation:

Step 1: "   -042" (leading whitespace is read and ignored)
            ^
Step 2: "   -042" ('-' is read, so the result should be negative)
             ^
Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
               ^
Example 3:

Input: s = "1337c0d3"

Output: 1337

Explanation:

Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
         ^
Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
             ^
Example 4:

Input: s = "0-1"

Output: 0

Explanation:

Step 1: "0-1" (no characters read because there is no leading whitespace)
         ^
Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
          ^
Example 5:

Input: s = "words and 987"

Output: 0

Explanation:

Reading stops at the first non-digit character 'w'.

 

Constraints:

0 <= s.length <= 200
s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
*/

export function myAtoi(s: string): number {
  let i = 0;
  let sign = 1;
  const INT32_MAX = Math.pow(2, 31) - 1; // 2^31 - 1 = 2147483647
  const INT32_MIN = -Math.pow(2, 31); // -2^31 = -2147483648

  // Step 1: Skip leading whitespace
  while (i < s.length && s[i] === " ") {
    i++;
  }

  // Step 2: Check if the string is empty after skipping whitespace
  if (i >= s.length) return 0;

  // Step 3: Handle optional '+' or '-' sign
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "+" ? 1 : -1;
    i++;
  }

  // Step 4: Read digits and form the number
  let num = 0;
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    const digit = parseInt(s[i]); // Convert the character to a number

    // Check for overflow
    if (
      num > Math.floor(INT32_MAX / 10) ||
      (num === Math.floor(INT32_MAX / 10) && digit > INT32_MAX % 10)
    ) {
      return sign === 1 ? INT32_MAX : INT32_MIN;
    }

    num = num * 10 + digit;
    i++;
  }

  return sign * num;
}

/* 
main.ts
import { myAtoi } from "./LeetCode_GeekForGeek/strings/LC_08";

console.log(myAtoi("+456"));

*/
