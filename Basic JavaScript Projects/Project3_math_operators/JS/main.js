// Function to generate a random color in HEX format (#RRGGBB)
function getRandomColor() {
  var letters = "0123456789ABCDEF"; // Hexadecimal digits used in colors
  var color = "#"; // Start of HEX color
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // Generate random hex digit
  }
  return color; // Return the generated color
}

// Function to perform addition (8 + 5)
function performAddition() {
  let sum = 8 + 5; // Perform addition
  let element = document.getElementById("Math"); // Select the element
  element.innerHTML = "The sum is: " + sum; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}

// Function to perform subtraction (8 - 5)
function performSubtraction() {
  let difference = 8 - 5; // Perform subtraction
  let element = document.getElementById("Math1"); // Select the element
  element.innerHTML = "The difference is: " + difference; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}

// Function to perform multiplication (8 * 5)
function performMultiplication() {
  let product = 8 * 5; // Perform multiplication
  let element = document.getElementById("Math2"); // Select the element
  element.innerHTML = "The product is: " + product; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}

// Function to perform division (8 / 5)
function performDivision() {
  let quotient = 8 / 5; // Perform division
  let element = document.getElementById("Math3"); // Select the element
  element.innerHTML = "The quotient is: " + quotient; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}

// Function to perform multiple mathematical operations
function performMultipleOperations() {
  let result = 8 + (5 * 10) / 2 - 3; // Perform complex operations
  let element = document.getElementById("Math4"); // Select the element
  element.innerHTML = "The result is: " + result; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}

// Function to perform modulus operation (8 % 5)
function performModulus() {
  let remainder = 8 % 5; // Find the remainder
  let element = document.getElementById("Math5"); // Select the element
  element.innerHTML = "The remainder is: " + remainder; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}

// Function to perform negation (convert 5 to -5)
function performNegation() {
  let x = 5; // Define variable
  let element = document.getElementById("Math6"); // Select the element
  element.innerHTML = "The negation of x is: " + -x; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}

// Function to perform increment (5 → 6)
function performIncrement() {
  let x = 5; // Define variable
  let element = document.getElementById("Math7"); // Select the element
  element.innerHTML = "The increment of x is: " + ++x; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}

// Function to perform decrement (5 → 4)
function performDecrement() {
  let x = 5; // Define variable
  let element = document.getElementById("Math8"); // Select the element
  element.innerHTML = "The decrement of x is: " + --x; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}

// Function to generate a random number (0-99)
function performRandom() {
  let random = Math.floor(Math.random() * 100); // Generate a random number
  let element = document.getElementById("Math9"); // Select the element
  element.innerHTML = "The random number is: " + random; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}

// Function to calculate the square root of 64
function calculateMath() {
  let number = 64; // Define number
  let result = Math.sqrt(number); // Calculate square root
  let element = document.getElementById("mathResult"); // Select the element
  element.innerHTML = "The square root of " + number + " is: " + result; // Update the element's text
  element.style.color = getRandomColor(); // Change text color to a random color
}
