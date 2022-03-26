const CodelandUsernameValidation = str => {

  // code goes here  
  if (str.length < 4 || str.length > 25) return "false";
  if (typeof str[0] !== "string") return "false";
  let re = /^\w+$/;
  if (!re.test(str)) return "false";
  if (str[str.length - 1] === "_") return "false";
  return "true";


};

const str = "u__hello_world123_";
console.log(CodelandUsernameValidation(str));