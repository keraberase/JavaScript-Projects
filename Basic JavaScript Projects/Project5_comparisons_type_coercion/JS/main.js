// Writing the data type of different values to the document
document.write(typeof "Hello, world!");
document.write(typeof 5);
document.write(typeof false);

// Function to demonstrate NaN by dividing 0 by 0
function my_Function() {
  document.getElementById("Test").innerHTML = 0 / 0;
}

// Function to check if a string is NaN
function my_Function2() {
  document.getElementById("Test2").innerHTML = isNaN("This is a string");
}

// Function to check if a numeric string is NaN
function my_Function3() {
  document.getElementById("Test3").innerHTML = isNaN("1010");
}

// Writing extremely large numbers
document.write(2e400);
document.write(-3e400);

// Writing boolean comparisons to the document
document.write(32 > 10);
document.write(32 < 10);

// Logging a mathematical operation to the console
console.log(242 + 10);

// Logging a comparison to the console
console.log(10 < 5);

// Utilizing the == operator
console.log(2000 == 2000);
console.log(2000 == 2001);

// Utilizing the === operator
console.log(2000 === 2000);
console.log(2000 === 2001);
console.log("2000" === 2000);
console.log(2000 === "Hello");

// Utilizing the && (AND) operator
console.log(400 > 200 && 300 > 150);
console.log(200 > 400 && 300 > 150);

// Utilizing the || (OR) operator
console.log(200 > 400 || 400 > 150);
console.log(200 > 400 || 150 > 300);

// Utilizing the ! (NOT) operator
function not_Function() {
  document.getElementById("Not").innerHTML = !(200 > 400);
}

function not_Function2() {
  document.getElementById("Not2").innerHTML = !(200 < 400);
}
