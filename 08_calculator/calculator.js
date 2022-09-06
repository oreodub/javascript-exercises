const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
	arr.forEach(num => total += num)
  return total;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(num => total *= num)
  return total;
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
	if (num < 0) {
    return -1;
  } else if (num == 0) {
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
  factorial
};
