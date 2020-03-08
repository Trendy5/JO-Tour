
'use strict';
console.log(Comment);
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('slideshow');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change image every 2 seconds

}

//addComment('KFC','abdallah','hggakjhglgoihiho');
function addComment(name,userName,comment) {
  var time=Date();

  console.log(time);
  for (let index = 0; index < Storge.places.length; index++) {
    if(name===Storge.places[index].name){
      new Comment(index,userName,comment,time);
      break;
    }
  }
  localStorage.places = JSON.stringify(Storge.places);
  for (let index = 0; index < filtered.length; index++) {
    if(name===filtered[index].name){
      filtered[index].comments.push({userName:userName,comment:comment,time:time});
      //console.log(filtered[index]);
      console.log(filtered);
      break;
    }
  }
}
