'use strict';
var filtered = [...Storge.places];

function filterLoction(arrId) {
  var arr = [];
  for (let i = 0; i < filtered.length; i++) {
    for (let j = 0; j < arrId.length; j++) {
      if (filtered[i].id == arrId[j]) {
        arr.push(filtered[i]);
      }
    }
  }
  if (arr.length > 0) {
    filtered = arr;
  }
}

function filterType(arrType) {
  var arr = [];
  for (let i = 0; i < filtered.length; i++) {
    for (let j = 0; j < arrType.length; j++) {
      if (filtered[i].type === arrType[j]) {
        arr.push(filtered[i]);
      }
    }
  }
  if (arr.length > 0) {
    filtered = arr;
  }
}

function filterRate(rate) {
  var arr = [];
  var avgRate = 0;
  for (let i = 0; i < filtered.length; i++) {
    for (let j = 0; j < filtered[i].rate.length; j++) {
      avgRate += filtered[i].rate[j].rate;
    }
    avgRate = avgRate / filtered[i].rate.length;

    if (Math.floor(avgRate) >= rate) {
      arr.push(filtered[i]);
    }
    avgRate = 0;
  }
  if (arr.length > 0) {
    filtered = arr;
  }
}

function filterCost(cost) {
  var arr = [];
  var avgCost = 0;
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i].avarge.length > 0) {
      for (let j = 0; j < filtered[i].avarge.length; j++) {
        avgCost += filtered[i].avarge[j].avg;
      }
    } else {
      // console.log('else');
      arr.push(filtered[i]);
      continue;
    }
    if (avgCost / filtered[i].avarge.length <= cost) {
      // console.log(avgCost / filtered[i].avarge.length);
      // console.log('if');
      arr.push(filtered[i]);
    }
    avgCost = 0;
  }

  if (arr.length > 0) {
    filtered = arr;
  }
}

function render() {
  var section = document.getElementById('render-objects');
  var artical;
  var img;
  var div;
  var h3;
  var p;
  for (let index = 0; index < filtered.length; index++) {
    artical = document.createElement('article');
    artical.setAttribute('class','cardfullbox');
    img = document.createElement('img');
    img.setAttribute('class','cardphoto');
    img.src = filtered[index].imgs[0];
    artical.appendChild(img);
    div = document.createElement('div');
    div.setAttribute('class','cardtext');
    h3 = document.createElement('h3');
    h3.setAttribute('class','cardtitle');
    h3.textContent = filtered[index].name;
    p = document.createElement('p');
    p.textContent = `${filtered[index].des.slice(0, 90)}....`;
    div.appendChild(h3);
    div.appendChild(p);
    p = document.createElement('p');
    p.textContent = `rate: ${Math.floor(
      filtered[index].rate.reduce((a, b) => a + b.rate, 0) /
        filtered[index].rate.length
    )}/5`;
    div.appendChild(p);
    artical.appendChild(div);
    section.appendChild(artical);
  }
  console.log(filtered[0]);
  console.log(section);
}
render();

var filter = document.getElementById('filter');

filter.addEventListener('submit', funFilter);

function funFilter(event) {
  event.preventDefault();
  filtered = [...Storge.places];
  var search = getCheckedCheckboxesFor('loction');
  if (search.length > 0) {
    filterLoction(search);
    // console.log(filtered);
  }

  search = getCheckedCheckboxesFor('place');
  if (search.length > 0) {
    filterType(search);
    // console.log(filtered);
  }

  filterRate(event.target.rating.value);
  search = event.target.Budget.value;
  if (search) {
    filterCost(search);
    // console.log(filtered);
  }
  console.log(filtered);
}

function getCheckedCheckboxesFor(checkboxName) {
  var checkboxes = document.querySelectorAll(
      'input[name="' + checkboxName + '"]:checked'
    ),
    values = [];
  Array.prototype.forEach.call(checkboxes, function(el) {
    values.push(el.id);
  });
  return values;
}


// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }