'use strict';
console.log(Comment);

// adding skideshow to header photo
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
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


//////////////////////////////////////////////////////////////////////////////////////////////////

addComment('KFC','abdallah','hggakjhglgoihiho');
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
      //console.log(filtered[index]);
      console.log(filtered);
    }
  }
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

function test(e) {
  var pop = document.getElementById('pop');
  pop.textContent = ''
  var input;
  var h4 = document.createElement('h4')
  var p;
  var a = document.createElement('a');
  var img;
  var i = document.createElement('i')
  i.setAttribute('class','fas fa-times')
  i.setAttribute('id','xpop')
  a.appendChild(i)
  pop.appendChild(a)
  for(let i = 0; i < filtered.length;i++){
    if(filtered[i].name === e){
      img = document.createElement('img')
      img.src = filtered[i].imgs[0]
      pop.appendChild(img)
      h4.textContent = filtered[i].name
      p = document.createElement('p')
      p.textContent = filtered[i].des
      pop.appendChild(h4)
      pop.appendChild(p)
      h4 = document.createElement('h4')
      h4.textContent = 'Comments:'
      pop.appendChild(h4)
      for (let j = 0; j < filtered[i].comments.length; j++) {
        // const element = array[j];
        p = document.createElement('p')
        p.textContent = `${filtered[i].comments[j].user_name} ${filtered[i].comments[j].comment} ${filtered[i].comments[j].time}`
        pop.appendChild(p)
        // p = document.createElement('p')
        // p.textContent = filtered[i].comments[j].comment
        // pop.appendChild(p)
        // p = document.createElement('p')
        // p.textContent = filtered[i].comments[j].time
        // pop.appendChild(p)
        // console.log(filtered[i].comments[j])
        
      }
      input = document.createElement('input')
      input.setAttribute('type','text')
      input.style.width = '80%'
      input.style.margin = '5px 20% 5px 0'
      pop.appendChild(input)
     
 }
  }
  pop.style.display='inline-block'
  i.addEventListener('click',removePop)
}
function removePop(){
  // console.log('dsf')
  var pop = document.getElementById('pop');
  pop.style.display = 'none'
}