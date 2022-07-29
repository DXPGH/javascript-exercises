const palindromes = function (args) {
  //Lowercase the string and remove the unwanted characters from it
  let re = /[\W_]/g;
  let lowRegStr = args.toLowerCase().replace(re, "");

  //Split the string into an array of single characters, Reverse the array, Rejoin the single characters into one
  let reverseStr = lowRegStr.split("").reverse().join("");

  //Check if the reverseStr is === to the lowRegStr and return the Boolean value
  return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
