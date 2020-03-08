
'use strict';
// console.log(Comment)
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}





function rating(name, user_name, rate) {

  console.log(rate);
  console.log(name);
  console.log(user_name);
  for (let index = 0; index < Storge.places.length; index++) {

    if (name === Storge.places[index].name) {

      new Rate(index, user_name, rate);
      break;

    }

  }
  localStorage.places = JSON.stringify(Storge.places);
  for (let index = 0; index < filtered.length; index++) {
    if (name === filtered[index].name) {
      filtered[index].rate.push({ user_name: user_name, rate: rate });
      console.log(filtered[index]);
      break;
    }
  }
}
rating('KFC', 'BOSS', 5);
