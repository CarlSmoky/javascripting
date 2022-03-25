const FirstFactorial = (num) => {

  // code goes here
  let sum = 1;
  for (let i = 0; i < num; i++) {
    let temp = num - i;
    sum *= temp;
  }
  return sum;
};