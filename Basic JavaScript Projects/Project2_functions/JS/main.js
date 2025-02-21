function myFunction() {
  // Define two text parts
  var stt1 = "I am learning";
  var stt2 = " a lot from this book!";

  // Find the element by ID
  var element = document.getElementById("concatenate");

  // Generate a random color
  var randomColor = getRandomColor();

  // Update the text content
  element.innerHTML = stt1 + stt2;

  // Change the text color to a random color
  element.style.color = randomColor;
}

// Function to generate a random color in HEX format (#RRGGBB)
function getRandomColor() {
  var letters = "0123456789ABCDEF"; // Hexadecimal digits
  var color = "#"; // Start of HEX color
  for (var i = 0; i < 6; i++) {
    // Pick a random character from letters and add it to the color
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function newFunction() {
  var sentence = "I am learning";
  sentence += " a lot from this book!";
  document.getElementById("create").innerHTML = sentence;
}
