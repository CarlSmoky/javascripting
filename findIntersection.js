const FindIntersection = strArr =>{

  // code goes here
  const frstArr = strArr[0].replace(/\s/g, '').split(',');
  const secondArr = strArr[1].replace(/\s/g, '').split(',');
  const newArr = [];
  for (let num1 of frstArr) {
    for (let num2 of secondArr) {
      if (num1 === num2) {
        newArr.push(num1);
      }
    }
  }
  const result = newArr.join(',');
  return result;
};
   
// keep this function call here 
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));