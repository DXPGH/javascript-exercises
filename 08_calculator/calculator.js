const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = (array) => {
  if (!array.length) {
    return 0;
  } else {
    return array.reduce((a, b) => a + b);
  }
};

const multiply = function (array) {
  return array.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
