const removeElement = (nums, val) => {
  let newArr = [];
  nums.map(num => {
    num === val ? null : newArr.push(num);
  });
  console.log(newArr);
  console.log(newArr.length);
  return newArr.length;
};



// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// const nums = [3, 2, 2, 3];
// const val = 3;


const nums = [0,1,2,2,3,0,4,2];
const val = 2;
removeElement(nums, val);