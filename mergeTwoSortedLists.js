/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const combineArray = (array1, array2) => {
  let newArr = array1;
  for (let i = 0; i < array2.length; i++)
    newArr.push(array2[i]);
  return newArr;
};

const bubbleSort = (array)=> {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }
  return array;
};

const mergeTwoLists = (list1, list2) => {
  const concatArrays = combineArray(list1, list2);
  const orderdNum = bubbleSort(concatArrays);
  return orderdNum;
};


// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
const list1 = [1,2,4];
const list2 = [1,3,4];
console.log(mergeTwoLists(list1, list2));