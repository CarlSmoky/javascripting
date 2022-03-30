const BracketMatcher = str => {

  // code goes here
  let countOpenParenthesis = 0;
  let coutCloseParenthesis = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") countOpenParenthesis += 1;
    if (str[i] === ")") coutCloseParenthesis += 1;
  }
  return countOpenParenthesis === coutCloseParenthesis ? 1 : 0;
};

let string = "(coder)(byte))";
console.log(BracketMatcher(string));