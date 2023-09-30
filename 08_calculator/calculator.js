// const add = function(a, b) {  
//   return a + b
// };

const add = (a,b) => a + b 

// const subtract = function() {
	
// };

const subtract = (a,b) => a - b

const sum = function(array) {return array.reduce((sum, current) => sum += current, 0)};

// const sum = array.reduce((sum, current) => sum += current, 0)
	
// }; doesn't work as array not defined 

const multiply = function(array) {return array.reduce((total, num) => total * num)};

// when there's no initial value the reduce method takes the first element and sets it as initial 
// so [1,2,3] total = 1 in this case we could also do:
// const multiply = function(array) {return array.reduce((num1, num2) => num1 * num2)};
// num1 just becomes the total after each round 
const power = (a,b) => a**b

const factorial = function(a) { 
  if (a === 0 || a === 1) {
    return 1
  } for (let i = a - 1; i >= 1; i--) {
    a *= i
  }
  return a
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
