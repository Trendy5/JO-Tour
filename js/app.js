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
  setTimeout(showSlides, 10000); // Change image every 10 seconds
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
      var commentdiv = document.createElement('div')
      pop.appendChild(commentdiv)
      commentdiv.setAttribute('id', 'commentdiv')
      for (let j = 0; j < filtered[i].comments.length; j++) {
        var p_time = document.createElement('p');
        p_time.textContent = filtered[i].comments[j].time;
        commentdiv.appendChild(p_time);
        p = document.createElement('p');

        p.textContent = `${filtered[i].comments[j].user_name} :     ${filtered[i].comments[j].comment} `;
        commentdiv.appendChild(p);
      }
      var user = document.createElement('p');
      user.textContent = 'UserName: ';
      user.style.padding = '5px';
      user.style.matgin='0px 42px 3px 5px';
      user.style.float = 'left';
      
      pop.appendChild(user);

      input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('id', 'input1');
      input.style.width = '75%';
      input.style.margin = '5px 10px 5px 10px';
      input.style.float = 'left';
      pop.appendChild(input);

      var comment = document.createElement('p')
      comment.textContent = 'Comment: ';
      comment.style.clear = 'both';
      comment.style.float = 'left';
      comment.style.padding = '7px';
      comment.style.matgin='0px 42px 3px 5px';
      pop.appendChild(comment);
      input = document.createElement('input');
      input.setAttribute('id', 'input2');
      input.setAttribute('type', 'text');
      input.style.width = '75%';
      input.style.height='25px';
      input.style.margin = '5px 10px 5px 10px';
      input.style.float = 'left';
      pop.appendChild(input);

      var rate = document.createElement('p');
      rate.style.clear = 'both';
      rate.style.float = 'left';
      rate.style.padding = '7px';
      rate.style.matgin='0px 91px 3px 5px';
      rate.textContent = 'Rate:  ';
      pop.appendChild(rate);
      input = document.createElement('input');
      input.setAttribute('id', 'input3');
      input.setAttribute('type', 'text');
      input.style.width = '75%';
      input.style.margin = '5px 10px 5px 46px';
      input.style.float = 'left';
      pop.appendChild(input);

      var btn = document.createElement('button')
      btn.setAttribute('id','popbtn')
      btn.textContent = 'Done ';
      pop.appendChild(btn)

      // addComment(filtered[i].name, user, comment);
      // rating(filtered[i].name, user, rate);
    }
  }
  showImgs();
  pop.style.display = 'inline-block';
  i.addEventListener('click', removePop);
  btn.addEventListener('click',comment_render)
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



function comment_render(user, comment, rate) {
  user = document.getElementById('input1').values;
  console.log(user)
  comment = document.getElementById('input2').values;
  console.log(comment)
  rate = document.getElementById('input3').values;
  console.log(rate)
  addComment(filtered[i].name, user, comment);
  rating(filtered[i].name, user, rate);
  //localStorage.places.comment = JSON.stringify(Storage.places.comment)
}
//making a guess game

//helper functions

var score = 0;
var count = 0;

function rendering() {
  var origin = Storge.places[Math.floor(Math.random() * Storge.places.length)];
  var num1 = Storge.places[Math.floor(Math.random() * Storge.places.length)];
  var num2 = Storge.places[Math.floor(Math.random() * Storge.places.length)];
  while (
    origin.name === num1.name ||
    origin.name === num2.name ||
    num1.name === num2.name
  ) {
    origin = Storge.places[Math.floor(Math.random() * Storge.places.length)];
    num1 = Storge.places[Math.floor(Math.random() * Storge.places.length)];
    num2 = Storge.places[Math.floor(Math.random() * Storge.places.length)];
  }
  var arr = [origin, num1, num2];
  startRender(arr);
}
var img;
var ds3;
function startRender(arr) {
  var div = document.getElementById('quiz');
  div.textContent = ''
var countp = 0;
  var simg = arr[Math.floor(Math.random() * arr.length)];
  ds3 = simg.des
  var p = document.createElement('p')
  p.setAttribute('class','q-p')
  p.textContent = 'jfkds'
  div.appendChild(p)
  img = document.createElement('img');
  img.setAttribute(
    'src',
    `${simg.imgs[Math.floor(Math.random() * simg.imgs.length)]}`
  );
  img.setAttribute('alt', `${simg.name}`);
  img.setAttribute('id', `img-q`);
  var div2 = document.createElement('div');
  div2.setAttribute('id', 'form');
  var test = [];
  for (let i = 0; i < arr.length; i++) {
    var object = arr[Math.floor(Math.random() * arr.length)];
    while (test.includes(object)) {
      object = arr[Math.floor(Math.random() * arr.length)];
    }
    test.push(object)
    var div3 = document.createElement('div')
    var p = document.createElement('p')
    p.setAttribute('onclick',`check("${object.name}")`)
    p.setAttribute('class','red')
    if(object.name === img.alt){
    p.setAttribute('id','sa7')
    }
    p.textContent = object.name
    div3.appendChild(p)
    div2.appendChild(div3)
  }
  console.log(test)
  var d6 = document.createElement('div')
  d6.setAttribute('id','des')
  // console.log(img);
  div.appendChild(img);
  div.appendChild(d6);
  div.appendChild(div2);
  var a = document.createElement('a')
  a.textContent = 'Next'
  a.setAttribute('onclick','next()')
  div.appendChild(a)
}
function next(){
  console.log('jlkj')
  rendering()
}
rendering();
function check(name,id){
  var d7 = document.getElementById('des')
  var p5 = document.createElement('p')
  console.log(ds3)
  p5.textContent = ds3
  d7.appendChild(p5)
  console.log(img.alt === name,id)
  var red = document.getElementsByClassName('red')
  for(let i = 0; i < red.length; i++){
    red[i].style.color = 'red'
  }
  var f =document.getElementById('sa7')
  f.style.color = 'green'
}



function game() {
 
  for (var i = 0; i < 5; i++) {
    if (event.target.name === placename) {
      score++;
      placename.style.backgroundColor = 'green';
      rendering();
    } else {
      randomName1.style.backgroundColor = 'red';
      randomName2.style.backgroundColor = 'red';
      rendering();
    }
  }
  count++;
  if ((count = 5)) {
    document.getElementById('scoreDisplay').innerHTML =
      ' Your Score is :  ${score} /  5  ';
  }
}

