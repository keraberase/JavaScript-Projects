function performAddition() {
  let sum = 8 + 5;

  // Insert result into the paragraph with id="Math"
  document.getElementById("Math").innerHTML = "The sum is: " + sum;
}

function performSubtraction() {
  let difference = 8 - 5;

  // Insert result into the paragraph with id="Math"
  document.getElementById("Math1").innerHTML =
    "The difference is: " + difference;
}

function performMultiplication() {
  let product = 8 * 5;

  document.getElementById("Math2").innerHTML = "The product is: " + product;
}

function performDivision() {
  let quotient = 8 / 5;

  document.getElementById("Math3").innerHTML = "The quotient is: " + quotient;
}
function performMultipleOperations() {
  let result = 8 + (5 * 10) / 2 - 3;

  document.getElementById("Math4").innerHTML = "The result is: " + result;
}
function performModulus() {
  let remainder = 8 % 5;

  document.getElementById("Math5").innerHTML = "The remainder is: " + remainder;
}
function performNegation() {
  let x = 5;

  document.getElementById("Math6").innerHTML = "The negation of x is: " + -x;
}

function performIncrement() {
  let x = 5;

  document.getElementById("Math7").innerHTML = "The increment of x is: " + ++x;
}
function performDecrement() {
  let x = 5;

  document.getElementById("Math8").innerHTML = "The decrement of x is: " + --x;
}
function performRandom() {
  let random = Math.floor(Math.random() * 100);

  document.getElementById("Math9").innerHTML =
    "The random number is: " + random;
}


function calculateMath() {
  let number = 64; 
  let result = Math.sqrt(number); 

  document.getElementById("mathResult").innerHTML =
    "The square root of " + number + " is: " + result;
}