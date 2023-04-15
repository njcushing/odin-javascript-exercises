const convertToCelsius = function(temp) {
  let result = (temp - 32) * (5 / 9); // Convert to fahrenheit
  result = Math.floor((result * 10) + 0.5) / 10; // Round to 1.d.p
  return result;
};

const convertToFahrenheit = function(temp) {
  let result = (temp * (9 / 5)) + 32; // Convert to celsius
  result = Math.floor((result * 10) + 0.5) / 10; // Round to 1.d.p
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
