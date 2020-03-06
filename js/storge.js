'use strict';

var loctoins = {'Amman':0,'Mafraq':1}
var restrunt = []
var pleaces = []
var Pleace = function(id,name,des,imgs,loctoin){
    this.id=id,
    this.name = name,
    this.des = des,
    this.imgs = imgs,
    this.loctoin =loctoin,
    this.rate = [],
    this.comments = []
    pleaces.push(this)
} 
var Restrunt = function(id,name,des,imgs,loctoin){
    this.id = id,
    this.name = name,
    this.descrption =des,
    this.imgs = imgs,
    this.loctoin = loctoin
    this.rate = [],
    this.comments = [],
    this.avarge= [],
    restrunt.push(this)
}
new Restrunt(0,'abujbarah','ksldjflkjdslfljdslkjads',['sdfafas'],'wastbald')
new Restrunt(0,'abujbarah','ksldjflkjdslfljdslkjads',['sdfafas'],'wastbald')
new Restrunt(0,'abujbarah','ksldjflkjdslfljdslkjads',['sdfafas'],'wastbald')

localStorage.loctoins = JSON.stringify(loctoins)
localStorage.restrunt = JSON.stringify(restrunt) 
localStorage.pleaces = JSON.stringify(pleaces) 