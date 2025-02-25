// Function to check if the rider is tall enough to ride
function Ride_Function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


// Function to check if a person is old enough to vote
function howOld() {
  var Age, Can_vote;
  Age = document.getElementById("Age").value;
  Can_vote = Age <= 18 ? "You are not old enough to vote" : "You can vote!";
  document.getElementById("Vote").innerHTML = Can_vote;
}

// Object constructor function for Vehicle
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

// Creating objects using the Vehicle constructor
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");


// Function to display Erik's car details
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}

// Object constructor function for Person
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Creating objects using the Person constructor
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// Function to display parents' ages
function myParents() {
  document.getElementById("New_and_This").innerHTML =
    "My father is " + myFather.age + ". My mother is " + myMother.age + ".";
}

// Function to demonstrate nested functions
function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();
  function Count() {
    var Starting_point = 42;
    function Plus_one() {
      Starting_point += 1;
    }
    Plus_one();
    return Starting_point;
  }
}
