const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sum = 0;
  for(let i= 0; i < arr.length ; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {

  let result = arr[0];
  for(let i = 1; i < arr.length ; i++){
    result *= arr[i];
  }

  return result;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {

  if(a == 0){
    return 1;
  }

	let result = a;
  for(let i = a - 1 ; i > 0 ; i--){
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
