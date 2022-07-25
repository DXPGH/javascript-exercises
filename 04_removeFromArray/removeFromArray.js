const removeFromArray = (array, ...theArgs) => {
  let newList = array.filter((i) => !theArgs.includes(i));
  return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
