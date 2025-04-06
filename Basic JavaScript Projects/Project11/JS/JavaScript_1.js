function changeFunction() {
    var A = document.getElementsByClassName("title");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = "red";
ctx.moveTo(0,0);
ctx.lineTo(500,500);
ctx.stroke();


var T = document.getElementById("canvas2");
var ctx2 = T.getContext("2d");
ctx2.strokeStyle = "blue";
ctx2.beginPath();
ctx2.arc(100, 100, 40, 0, 2 * Math.PI);
ctx2.stroke();

var G = document.getElementById("canvas3");
var ctx3 = G.getContext("2d");
ctx3.strokeStyle = "green";
ctx3.font = "30px Arial";
ctx3.fillText("Hello World", 20, 100);


var H = document.getElementById("canvas4");
var ctx4 = H.getContext("2d");
ctx4.strokeStyle = "purple";
ctx4.font = "30px Arial";
ctx4.strokeText ("Hello World",20,100);

var I = document.getElementById("canvas5");
var ctx5 = I.getContext("2d");

// Create gradient
var grd = ctx5.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"violet");
grd.addColorStop(1,"blue");

// Fill with gradient
ctx5.fillStyle = grd;
ctx5.fillRect(0,0,200,200);

var J = document.getElementById("canvas6");
var ctx = J.getContext("2d");

// Create gradient

var grd = ctx.createRadialGradient(100,100,10,90,100,100);
grd.addColorStop(0,"orange");
grd.addColorStop(1,"yellow");

// Fill with gradient

ctx.fillStyle = grd;
ctx.fillRect(0,0,200,200);