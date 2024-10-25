const { duplicate } = require("./Tutort/top150/leetCode219");
const { containDuplicate } = require("./Tutort/top150/leetCode220");

//LeetCode219
/* let inputArray = [1, 2, 3, 4];
let limit = 3;
console.log("leetcode219: ", duplicate(inputArray, limit));
*/

//LeetCode220
let inputArray = [1, 5, 9, 1, 5, 9];
let indexDiff = 2;
let valueDiff = 3;
console.log(
  "leetcode219: ",
  containDuplicate(inputArray, indexDiff, valueDiff)
);
