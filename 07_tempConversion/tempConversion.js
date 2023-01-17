const convertToCelsius = function(f) {
  return oneDecimal((f - 32) * (5 / 9));
};

const convertToFahrenheit = function(c) {
  return oneDecimal(c * (9/5) + 32);
};

function oneDecimal(n) {
  return Math.round(n*10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
