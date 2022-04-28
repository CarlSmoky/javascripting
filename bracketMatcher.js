const BracketMatcher = str => {

  // code goes here
  let countOpenParenthesis = 0;
  let coutCloseParenthesis = 0;
  for (let text of str) {
    if (text === "(") countOpenParenthesis ++;
    if (text === ")") coutCloseParenthesis ++;
  }

  return countOpenParenthesis === coutCloseParenthesis ? 1 : 0;
};


let string = "(coder)(byte))";
console.log(BracketMatcher(string));