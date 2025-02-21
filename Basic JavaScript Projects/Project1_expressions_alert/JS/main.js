// Display a pop-up alert with a message
// window.alert("Hello world");

// Output text to the webpage
document.write("Hello, world!");

// Declare a variable and display its value
var x = "Hello, world!";
document.write(x);

// Use let to store a string and display it in an alert
// let myString = "Hello, world!";
// window.alert(myString);

// Escape quotation marks in a string
let myEscape = 'John said, "I can’t wait to see you!"';
document.write(myEscape);

// Concatenate strings and display the result
let myConcat = "I am learning a lot" + " from this book!";
document.write(myConcat);

// Concatenate strings and display the result
let myMessage = "Hello, " + "this is a " + "concatenated string.";
document.write(myMessage);
// Assign multiple variables in one statement
let name = "John",
  age = 30,
  city = "New York";
document.write(name);

// Declare two string variables
var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string";

// Concatenate the two strings and display them on the webpage
document.write(Sent1 + Sent2);

// Display an alert message
window.alert("Hello! This is a JavaScript alert.");

// Write an expression
document.write(5 + 5);

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("timeButton");

  let output = document.getElementById("demo");

  button.addEventListener("click", function () {
    let currentTime = new Date().toLocaleTimeString();

    output.innerHTML = currentTime;
  });
});

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function myFunction() {
  var sentense = "I am learning";
  sentense += " a lot from this book!";
  document.getElementById("concatenate").innerHTML = sentense;
}
