
const twoSum = (nums, target) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
      }
    }
  }
  return result;
};
// const nums = [2,7,11,15];
// const target = 9;

// const nums = [3,2,4];
// const target = 6;

const nums = [3, 2, 3];
const target = 6;
twoSum(nums, target);