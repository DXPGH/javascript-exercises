const fibonacci = function (num) {
  Number(num);
  if (num < 0) {
    return "OOPS";
  }
  if (num <= 1) {
    return Number(num);
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
