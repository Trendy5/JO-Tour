'use strict';

var locations = {'Amman':0,'Maan':1}
var restaurants = []
var places = []
var Pleace = function(id,name,des,imgs,location){
    this.id=id,
    this.name = name,
    this.des = des,
    this.imgs = imgs,
    this.location =location,
    this.rate = [],
    this.comments = []
    places.push(this)
} 
var Restrunt = function(id,name,des,imgs,location){
    this.id = id,
    this.name = name,
    this.descrption =des,
    this.imgs = imgs,
    this.location = location
    this.rate = [],
    this.comments = [],
    this.avarge= [],
    restaurants.push(this)
}
var Comment = function(object,user_name,comment,time){
    this.user_name = user_name,
    this.comment = comment,
    this.time=time,
    object.comments.push(this)
}
var Rate = function(object,user_name,rate){
    this.user_name = user_name,
    this.rate = rate,
    object.rate.push(this)
}
new Restrunt(0,'abujbarah','ksldjflkjdslfljdslkjads',['sdfafas'],'wastbald')
new Restrunt(0,'abujbarah','ksldjflkjdslfljdslkjads',['sdfafas'],'wastbald')
new Restrunt(0,'abujbarah','ksldjflkjdslfljdslkjads',['sdfafas'],'wastbald')
new Comment(restaurants[0],'yazan','jlkjsdlkj','kldsjfkl')
localStorage.locations = JSON.stringify(locations)
localStorage.restaurants = JSON.stringify(restaurants) 
localStorage.places = JSON.stringify(places) 
var StorgeLoctions = JSON.parse(localStorage.locations)
var StorgeRestaurants = JSON.parse(localStorage.restaurants)
var StorgePlaces = JSON.parse(localStorage.places)
// console.log(StorgeLoctions,StorgePlaces,StorgeRestaurants)