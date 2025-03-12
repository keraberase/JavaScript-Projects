// Utilizing the .concat() method
function Concatenate() {
  var part1 = "Hello, ";
  var part2 = "all ";
  var part3 = "world!";
  var whole_sentence = part1.concat(part2, part3);
  document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Utilizing the .slice() method
function Slice() {
  var sentence = "Hello, all world!";
  var section = sentence.slice(7, 10);
  document.getElementById("Slice").innerHTML = section;
}

// Utilizing the .toUpperCase() method
function Uppercase() {
  var sentence = "Hello, all world!";
  var upper = sentence.toUpperCase();
  document.getElementById("Uppercase").innerHTML = upper;
}

// Utilizing the .search() method
function Search() {
  var sentence = "Hello, all world!";
  var search = sentence.search("world");
  document.getElementById("Search").innerHTML = search;
}

// Utilizing the .toString() method
function Number_Method() {
  var x = 123;
  document.getElementById("Number_Method").innerHTML = x.toString();
}

// Utilizing the .toPrecision() method
function Precision_Method() {
  var x = 12345.6789;
  document.getElementById("Precision_Method").innerHTML = x.toPrecision(6);
}

// Utilizing the .toFixed() method
function Fixed_Method() {
  var x = 12345.6789;
  document.getElementById("Fixed_Method").innerHTML = x.toFixed(2);
}

// Utilizing the .valueOf() method
function ValueOf_Method() {
  var x = 12345.6789;
  document.getElementById("ValueOf_Method").innerHTML = x.valueOf();
}
