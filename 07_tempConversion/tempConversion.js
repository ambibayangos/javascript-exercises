// Y = (X - 32)*5/9
const convertToCelsius = function(tempInFarenheigth) {
  let tempInCel = (tempInFarenheigth - 32)*5/9;
  let roundedTempInCel = Math.round(tempInCel*10)/10;
  return roundedTempInCel;
};

// Y = (X*9/5 + 32)
const convertToFahrenheit = function(tempInCel) {
  let tempInFar = tempInCel*9/5 + 32;
  let roundedTempInFar = Math.round(tempInFar*10)/10;
  return roundedTempInFar;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
