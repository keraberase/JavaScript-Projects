// Assigning local and global variables
var a = 50; // global variable

function addNumbers() {
  // Using global variable 'a'
  document.write(20 + a + "<br>");
}

function addNumbers2() {
  // Using global variable 'a' again
  document.write(a + 1000 + "<br>");
}

addNumbers();
addNumbers2();

function addNumbers3() {
  // Declaring a local variable 'b'
  var b = 100;
  document.write(20 + b + "<br>");
}

function addNumbers4() {
  // Trying to use 'b' outside its function (will cause an error)
  document.write(b + 1000);
}

addNumbers3();
addNumbers4(); // This will cause an error because 'b' is local to addNumbers3()

function addNumbers5() {
  // Declaring a local variable 'c'
  var c = 100;
  console.log(20 + c); // Logging the sum in the console
}

function addNumbers6() {
  // Trying to use 'c' outside its function (will cause an error)
  console.log(c + 1000);
}

addNumbers5();
addNumbers6(); // This will cause an error because 'c' is local to addNumbers5()

// Function to display a message based on the current time
function whatTimeIsIt() {
  if (new Date().getHours() < 18) {
    document.getElementById("time").innerHTML = "Good day!";
  }
}

// Function to display either "Good day!" or "Good evening!" based on time
function whatTimeIsIt2() {
  if (new Date().getHours() < 18) {
    document.getElementById("time2").innerHTML = "Good day!";
  } else {
    document.getElementById("time2").innerHTML = "Good evening!";
  }
}

// Function to check body temperature
function whatTemperature() {
  let temp = document.getElementById("temp").value;
  temp = parseFloat(temp); // Convert input to a number

  let Temperature;

  if (temp <= 36.6) {
    Temperature = "You might be feeling cold! 🥶";
  } else {
    Temperature = "You have a fever! 🤒 Please see a doctor!";
  }
  document.getElementById("temperature").innerHTML = Temperature;
}

// Function to determine the time of the day
function timeFunction() {
  var time = new Date().getHours();
  var reply;
  if (time < 12 && time > 0) {
    reply = "It is morning time!";
  } else if (time >= 12 && time < 18) {
    reply = "It is the afternoon.";
  } else {
    reply = "It is evening time.";
  }
  document.getElementById("timeOfDay").innerHTML = reply;
}

// Function to check body temperature and categorize it
function whatTemperature2() {
  let temp2 = document.getElementById("temp2").value;
  temp2 = parseFloat(temp2); // Convert input to a number

  let Temperature;

  if (temp2 < 36.6) {
    Temperature = "You might be feeling cold! 🥶";
  } else if (temp2 >= 36.6 && temp2 <= 37.2) {
    Temperature = "You are healthy! 😊";
  } else {
    Temperature = "You have a fever! 🤒 Please see a doctor!";
  }
  document.getElementById("temperature2").innerHTML = Temperature;
}
