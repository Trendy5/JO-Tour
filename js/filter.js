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
      arr.push(filtered[i]);
      continue;
    }
    if (avgCost / filtered[i].avarge.length <= cost) {
      arr.push(filtered[i]);
    }
    avgCost = 0;
  }

  if (arr.length > 0) {
    filtered = arr;
  }
}

function render() {
//   var numOfResult=document.createElement('h3');
//  numOfResult.textContent= filtered.length;

 console.log(numOfResult);
  var section = document.getElementById('render-objects');
  section.textContent="";
  var contant= document.getElementById('maincontent').style.display = "none";

  section.style.display= "block";
  
  var artical;
  var img;
  var div;
  var h3;
  var p;
  var a;
  for (let index = 0; index < filtered.length; index++) {
    a = document.createElement('a');
    a.setAttribute('name', filtered[index].name);
    a.setAttribute('href', `javascript:test("${filtered[index].name}")`);
    artical = document.createElement('article');
    artical.setAttribute('class', 'cardfullbox');
    img = document.createElement('img');
    img.setAttribute('class', 'cardphoto');
    img.src = filtered[index].imgs[0];
    artical.appendChild(img);
    div = document.createElement('div');
    div.setAttribute('class', 'cardtext');
    h3 = document.createElement('h3');
    h3.setAttribute('class', 'cardtitle');
    h3.textContent = filtered[index].name;
    p = document.createElement('p');
    p.setAttribute('class', 'card-rate');
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
    a.appendChild(artical);
    section.appendChild(a);
  }
  console.log(filtered[0]);
  console.log(section);
}

var filter = document.getElementById('filter');

// filter.addEventListener('submit', funFilter);

function funFilter(event) {
  event.preventDefault();
  filtered = [...Storge.places];
  var search = getCheckedCheckboxesFor('loction');
  if (search.length > 0) {
    filterLoction(search);
  }

  search = getCheckedCheckboxesFor('place');
  if (search.length > 0) {
    filterType(search);
  }

  filterRate(event.target.rating.value);
  search = event.target.Budget.value;
  if (search) {
    filterCost(search);
  }

  render();

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

function renderPackage() {
  var sectionPkg = document.getElementById('container');
  var divPkgInfo;
  var divPkgControl;
  var h2Pkg;
  var pPkg;
  var buttonPkg;
  var spanPkg;
  var divPkgImg;
  var divPkgImgInfo;
  var imgPkg;
  var h3Pkg;
  var ulPkg;
  var liPkg;

  console.log('sdaf');
  for (let i = 0; i < Storge.booking.length; i++) {
    console.log('d');
    divPkgInfo = document.createElement('div');
    divPkgInfo.setAttribute('class', 'product-details');
    sectionPkg.appendChild(divPkgInfo);
    h2Pkg = document.createElement('h2');
    h2Pkg.textContent = Storge.booking[i].name;
    divPkgInfo.appendChild(h2Pkg);
    pPkg = document.createElement('p');
    pPkg.setAttribute('class', 'information');
    pPkg.textContent = Storge.booking[i].des;
    divPkgInfo.appendChild(pPkg);
    divPkgControl = document.createElement('div');
    divPkgControl.setAttribute('class', 'control');
    divPkgInfo.appendChild(divPkgControl);
    buttonPkg = document.createElement('button');
    buttonPkg.setAttribute('class', 'btn');
    divPkgControl.appendChild(buttonPkg);
    spanPkg = document.createElement('span');
    spanPkg.setAttribute('class', 'price');
    spanPkg.textContent = Storge.booking[i].budget;
    buttonPkg.appendChild(spanPkg);
    spanPkg = document.createElement('span');
    spanPkg.setAttribute('class', 'buy');
    spanPkg.textContent = 'Book Now';
    buttonPkg.appendChild(spanPkg);
    divPkgImg = document.createElement('div');
    divPkgImg.setAttribute('class', 'product-image');
    sectionPkg.appendChild(divPkgImg);
    imgPkg = document.createElement('img');
    imgPkg.setAttribute('alt', 'package-img');
    imgPkg.setAttribute('src', Storge.booking[i].img);
    divPkgImg.appendChild(imgPkg);
    divPkgImgInfo = document.createElement('div');
    divPkgImgInfo.setAttribute('class', 'info');
    divPkgImg.appendChild(divPkgImgInfo);
    h3Pkg = document.createElement('h3');
    h3Pkg.textContent = 'Tour Details';
    divPkgImgInfo.appendChild(h3Pkg);
    ulPkg = document.createElement('ul');
    divPkgImgInfo.appendChild(ulPkg);
    for (let l = 0; l < Storge.booking[i].activity.length; l++) {
      liPkg = document.createElement('li');
      liPkg.textContent = Storge.booking[i].activity[l];
      ulPkg.appendChild(liPkg);
    }

    console.log(sectionPkg);
  }
}
renderPackage();
