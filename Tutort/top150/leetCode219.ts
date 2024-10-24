//Brute Force approach..

/* const containsNearByDuplicate = (nums: number[], k: number): boolean => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};

module.exports = { duplicate: containsNearByDuplicate }; **/

//We can optimize it by using hashmap

const containsNearByDuplicate = (inputArray: [], k: number): boolean => {
  const map = new Map();
  for (let i = 0; i < inputArray.length; i++) {
    if (map.has(inputArray[i]) && Math.abs(i - map.get(inputArray[i])) <= k) {
      return true;
    }
    map.set(inputArray[i], i);
  }
  return false;
};

module.exports = { duplicate: containsNearByDuplicate };
