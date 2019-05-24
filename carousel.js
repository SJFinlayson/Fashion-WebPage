var slideIndex = 0;
var autochange;
showSlides();

function showSlides() {
	"use strict";
  var i;
  var slides = document.getElementsByClassName("my-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = "block";
  autoChange = setTimeout(showSlides, 8000); // Change image every 2 seconds
} 

function plusSlides(n) {
	"use strict";
	window.clearTimeout(autochange);
}