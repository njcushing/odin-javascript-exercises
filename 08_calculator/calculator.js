const add = function(one, two) {
	return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(numbers) {
    return numbers.reduce((tot, number) => (tot += number), 0);
};

const multiply = function(numbers) {
	let result = 1;
    for(let i = 0; i < numbers.length; i++){ result *= numbers[i]; }
    return result;
};

const power = function(value, power) {
	return value ** power;
};

const factorial = function(value) {
    let result = 1;
    for(let i = 1; i <= value; i++){
        result *= i;
    }
    return result;
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
