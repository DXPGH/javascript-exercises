const sumAll = function (start, iterations) {
  let sum = 0;

  //Checks if a value is negative or not
  if (start <= -1 || iterations <= -1) {
    return "ERROR";
  }

  //Checks if the values inputted to the function are a typeof number or not
  if (isNaN(iterations) || typeof iterations !== "number") {
    return "ERROR";
  }

  //Checks which value is the bigger number
  if (start < iterations) {
    for (let i = 0; i < iterations; i++) {
      sum += start + i;
    }
    return sum;
  } else {
    for (let i = 0; i < start; i++) {
      sum += iterations + i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
