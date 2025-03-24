// Loops 
function Call_Loop() {
    var str = "";
    var x = 1;
    while (x < 20) {
        str += x + "<br>";
        x++;
    }
    document.getElementById("loop").innerHTML = str;
}
// Show how much lenght in sentense
function length() {
    var str = "He jests at scars that never felt a wound.";
    var n = str.length;
    document.getElementById("length").innerHTML = n;
}

// For loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {

    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

// Array

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

// Constant

function constant_function() {
    const car = {  brand: "Toyota", model: "Camry",year: 2022};
    car.year = 2024;
    car.color = "Red";
    document.getElementById("Constant").innerHTML = 
        `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}`;
}

// Let
function let_function() {
    var x = 10;
    {
        let x = 2;
    }
    document.getElementById("let").innerHTML = x;
}

// Return statement

function return_function(name) {
    return "Hello " + name;
}
document.getElementById("return").innerHTML = return_function("John");

// Object

let car = {
    make: "Toyota ",
    model: "Camry ",
    year: "2022 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Object").innerHTML = car.description();

// Break statement

var text = "";
var i;
for (i = 0; i < 11; i++) {
    if (i === 4) { break; }
    text += "The number is " + i + "<br>";
}

document.getElementById("Break").innerHTML = text;

// Continue statement


var text = "";
var i;
for (i = 0; i < 11; i++) {
    if (i === 8) { continue; }
    text += "The number is " + i + "<br>";
}

document.getElementById("Continue").innerHTML = text;