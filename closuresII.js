const wrapLog = function(callback, name) {
  
  return (...args) => {
    // ...args means whatever and however many args get passed in, just turn it into an array called args 
    const cbResult = callback.apply(null, args);
    const argString = args.join(',');
    console.log(`${name}(${argString}) => ${cbResult}`);
  };
};

const example = () => {
  return (arg) => {
    console.log("calling return function", arg);
  };
};

const myReturnFunction = example();

myReturnFunction("this is my arg");


// "currying" is when you take a function with multiple args, and instead of applying them all at once, you apply one arg and make a new function.  Then you apply one arg and make a new function etc.
const adds = (num1) => {
  // it take 1 argument, and returns a function that also 1 argument
  return (num2) => {
    return num1 + num2;
  };
};

const adds7 = adds(7);
console.log(adds7(9));


// const area = function(x, y) {
//   return x * y;
// };
// const logArea = wrapLog(area, "area");

// logArea(5, 3); // area(5, 3) => 15
// logArea(3, 2); // area(3, 2) => 6

// const volume = function(x, y, z) {
//   return x * y * z;
// };
// const logVolume = wrapLog(volume, "volume");

// logVolume(5, 3, 2); // volume(5, 3, 2) => 30
// logVolume(3, 2, 4); // volume(3, 2, 4) => 24