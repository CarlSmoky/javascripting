/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const items = ["lamp", "pencil", "rubber duck", "iPhone", "iPad", "glass", "speakers", "ear phones"];
items.pop();
console.log(items.length);
const item = items.pop();
items.unshift(item);
console.log(items);
items.sort();
console.log(items);
const itemIndex = items.find((el, i) => {
  if (el === "pencil") {
    items.splice(i, 1);
  }
});
console.log(items);

