'use strict';

// adding skideshow to header photo

var slideIndex = 0;
var slideimgs = 0;

var slides = document.getElementsByClassName('slideshow');
// console.log(slides)
if (slides.length > 0) {
  showSlides();
}
function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function showImgs() {
  var slides = document.getElementsByClassName('filterimgs');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideimgs++;
  if (slideimgs > slides.length) {
    slideimgs = 1;
  }
  slides[slideimgs - 1].style.display = 'block';
  setTimeout(showImgs, 6000);
}

function addComment(name, userName, comment) {
  var time = Date();
  //console.log(time);
  for (let index = 0; index < Storge.places.length; index++) {
    if (name === Storge.places[index].name) {
      new Comment(index, userName, comment, time);
      break;
    }
  }
  localStorage.places = JSON.stringify(Storge.places);
  for (let index = 0; index < filtered.length; index++) {
    if (name === filtered[index].name) {
      filtered[index].comments.push({
        userName: userName,
        comment: comment,
        time: time
      });
    }
  }
}
function rating(name, user_name, rate) {
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
      break;
    }
  }
}

function test(e) {
  var pop = document.getElementById('pop');
  pop.textContent = '';
  var input;
  var h4 = document.createElement('h4');
  var p;
  var a = document.createElement('a');
  var img;
  var i = document.createElement('i');
  i.setAttribute('class', 'fas fa-times');
  i.setAttribute('id', 'xpop');
  a.appendChild(i);
  pop.appendChild(a);
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i].name === e) {
      var imgsdiv = document.createElement('div');
      for (let q = 0; q < filtered[i].imgs.length; q++) {
        img = document.createElement('img');
        img.setAttribute('class', 'filterimgs');
        img.src = filtered[i].imgs[q];
        imgsdiv.appendChild(img);
        pop.appendChild(imgsdiv);
      }

      h4.textContent = filtered[i].name;
      p = document.createElement('p');
      p.textContent = filtered[i].des;
      pop.appendChild(h4);
      pop.appendChild(p);
      h4 = document.createElement('h4');
      h4.textContent = 'Comments:';
      pop.appendChild(h4);
      for (let j = 0; j < filtered[i].comments.length; j++) {
        var p_time = document.createElement('p');
        p_time.textContent = filtered[i].comments[j].time;
        pop.appendChild(p_time);
        p = document.createElement('p');

        p.textContent = `${filtered[i].comments[j].user_name} :     ${filtered[i].comments[j].comment} `;
        pop.appendChild(p);
      }

      var user = document.createTextNode('UserName: ');
      pop.appendChild(user);

      input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.style.width = '80%';
      input.style.margin = '5px 20% 5px 0';
      pop.appendChild(input);

      var comment = document.createTextNode('Comment: ');
      pop.appendChild(comment);
      input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.style.width = '80%';
      input.style.margin = '5px 20% 5px 0';
      pop.appendChild(input);

      var rate = document.createTextNode('Rate:  ');
      pop.appendChild(rate);
      input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.style.width = '80%';
      input.style.margin = '5px 20% 5px 0';
      pop.appendChild(input);
      // addComment(filtered[i].name, user, comment);
      // rating(filtered[i].name, user, rate);
    }
  }
  showImgs();
  pop.style.display = 'inline-block';
  i.addEventListener('click', removePop);
}
function removePop() {
  var pop = document.getElementById('pop');
  pop.style.display = 'none';
}

function test3() {
  console.log('jsdlkf');
  var slides = document.getElementsByClassName('slideshow');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// /// Sticky navbar
// When the user scrolls the page, execute myFunctionwindow.onscroll = function() {myFunction()};
// Get the navbarvar navbar = document.getElementById("navbar");
// Get the offset position of the navbarvar sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll positionfunction myFunction() {  if (window.pageYOffset >= sticky) {    navbar.classList.add("sticky")  } else {    navbar.classList.remove("sticky");  }}

/// Sticky navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};
// Get the navbar
var navbar = document.getElementById('navbar');
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }



//making a guess game 

//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var score = 0;
var count = 0;


var placename ;
var randomName1 ;
var randomName2 ;
function rendering() {
  var image = Storge.places[randomNumber(0, Storge.places.length - 1)];
   placename = image.name;
  var imgrad = image.imgs[randomNumber(0, image.imgs.length - 1)];
   randomName1 = Storge.places[randomNumber(0, Storge.places.length - 1)].name;

   randomName2 = Storge.places[randomNumber(0, Storge.places.length - 1)].name;

  while (randomName1 === placename || randomName2 === placename || randomName2 === randomName1) {

    randomName1 = Storge.places[randomNumber(0, Storge.places.length - 1)].name;

    randomName2 = Storge.places[randomNumber(0, Storge.places.length - 1)].name;

  }
  console.log(image,randomName1,randomName2)

}
rendering();


var answersArray=[randomName1,randomName2,placename];
for (var i =0 ; i<3 ; i++){
  var randomanswer =answersArray[randomNumber(0, answersArray.length - 1)];
  var a ;
a= document.createElement('a');
a.setAttribute('onclick','game()')
div.getElementById(quiz);
div.appendChild(a);
a.textContent=`${answersArray}`
};

function game(){
  for (var i = 0; i < 5; i++) {
    if (event.target.name === placename) {
      score++;
      placename.style.backgroundColor = "green";
      rendering();
    }
    else {
      randomName1.style.backgroundColor = "red";
      randomName2.style.backgroundColor = "red";
      rendering();
    };
  };
  count++;
  if (count = 5) {
    document.getElementById("scoreDisplay").innerHTML = " Your Score is :  ${score} /  5  ";
  }
}







