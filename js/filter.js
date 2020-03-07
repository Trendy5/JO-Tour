'use strict';
var filtered = [...Storge.places, ...Storge.restaurants];
// console.log(filtered);
function filterLoction(arrId) {
  var arr = [];
  for (let i = 0; i < filtered.length; i++) {
    for (let j = 0; j < arrId.length; j++) {
      if (filtered[i].id === arrId[j]) {
        arr.push(filtered[i]);
      }
    }
  }
  if (arr.length > 0) {
    filtered = arr;
  }
}
// filterLoction([0]);
// console.log(filtered);
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
// filterType(['restaurants'])
// console.log(filtered)

function filterRate(rate) {
  var arr = [];
  var avgRate = 0;
  for (let i = 0; i < filtered.length; i++) {
    for (let j = 0; j < filtered[i].rate.length; j++) {
      avgRate += filtered[i].rate[j].rate;
    }
    avgRate = avgRate / filtered[i].rate.length;
    console.log(Math.floor(avgRate));
    if (Math.floor(avgRate) >= rate) {
      arr.push(filtered[i]);
    }
    avgRate = 0;
  }
  if (arr.length > 0) {
    filtered = arr;
  }
}
// filterRate(5);
console.log(filtered);

function filterCost(cost) {
  var arr = [];
  var avgCost = 0;
  for (let i = 0; i < filtered.length; i++) {
    console.log(filtered[i]);
    if (filtered[i].avarge) {
      for (let j = 0; j < filtered[i].avarge.length; j++) {
        avgCost += filtered[i].avarge[j].avg;
      }
    } else {
      arr.push(filtered[i]);
      continue;
    }
    if (avgCost / filtered[i].avarge.length <= cost) {
      console.log('jkljklj');
      arr.push(filtered[i]);
    }
  }

  if (arr.length > 0) {
    // console.log('if')
    filtered = arr;
  }
}

filterCost(21);
console.log(filtered);
