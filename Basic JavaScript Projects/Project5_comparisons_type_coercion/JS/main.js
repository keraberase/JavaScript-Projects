// Writing the data type of different values to the document
document.write(typeof "Hello, world!"); // Output: string
document.write(typeof 5); // Output: number
document.write(typeof false); // Output: boolean

// Function to demonstrate NaN  by dividing 0 by 0
function my_Function() {
  document.getElementById("Test").innerHTML = 0 / 0; // This results in NaN
}

// Function to check if a string is NaN 
function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("This is a string"); // Output: true 
}
// Function to check if a numeric string is NaN
function my_Function3() {
  document.getElementById("Test3").innerHTML = isNaN("1010"); // Output: false 
}

// Writing extremely large numbers 
document.write(2e400); // Output: Infinity 
document.write(-3e400); // Output: -Infinity 

// Writing boolean comparisons to the document
document.write(32 > 10); // Output: true 
document.write(32 < 10); // Output: false 

// Logging a mathematical operation to the console
console.log(242 + 10); // Output: 252

// Logging a comparison to the console
console.log(10 < 5); // Output: false 

console.log(2000 == 2000); // Output: true 
console.log(2000 == 2001); // Output: false

// Using the triple equals operator to compare two values
console.log(2000 === 2000); // Output: true
console.log(2000 === 2001); // Output: false
console.log("2000" === 2000); // Output: false
console.log(2000 ==="Hello"); // Output: false