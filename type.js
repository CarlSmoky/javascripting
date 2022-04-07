var bar = null;
console.log(typeof bar === "object");  // logs true!

console.log(bar !== null);

//In JavaScript is that null is also considered an object!
console.log((bar !== null) && (typeof bar === "object"));  // logs false

console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));

console.log((bar !== null) && (typeof bar === "object") && (! $.isArray(bar)));

console.log((bar !== null) && (bar.constructor === Object));

console.log(Array.isArray(bar));

(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a));
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

var myObject = {
  foo: "bar",
  func: function() {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo);
      console.log("outer func:  self.foo = " + self.foo);
      (function() {
          console.log("inner func:  this.foo = " + this.foo);
          console.log("inner func:  self.foo = " + self.foo);
      }());
  }
};
myObject.func();

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());

//Numbers in JavaScript are all treated with floating point precision
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 == 0.3); //false

function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3)); //true

// (function() {
//   console.log(1); 
//   setTimeout(function(){console.log(2)}, 1000); 
//   setTimeout(function(){console.log(3)}, 0); 
//   console.log(4);
// })();

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase(); //\W means "non-word", as opposed to \w which will match a word.
  console.log(str);
  return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'

// In JavaScript, functions provide access to an arguments object which provides access to the actual arguments passed to a function. This enables us to use the length property to determine at runtime the number of arguments passed to the function.
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

// When a function is invoked, JavaScript does not require the number of arguments to match the number of arguments in the function definition. If the number of arguments passed exceeds the number of arguments in the function definition, the excess arguments will simply be ignored. On the other hand, if the number of arguments passed is less than the number of arguments in the function definition, the missing arguments will have a value of undefined when referenced within the function.
function sum2(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}

console.log(sum2(3,3));   // Outputs 6
console.log(sum2(3)(3));  // Outputs 6