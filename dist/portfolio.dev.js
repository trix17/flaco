"use strict";

var elements = document.getElementsByClassName("column"); // Declare a loop variable

var i; // Full-width images

function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
} // Two images 


function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
} // Four images 


function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
} // Add active class to the current button (highlight it)


var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("two");
    current[0].className = current[0].className.replace(" two", "");
    this.className += " two";
  });
}

var element = document.getElementById("image-1");
var elem = document.body; // Make the body go full screen.

requestFullScreen(elem);