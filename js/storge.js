'use strict';

var locations = {'Amman':0,'Maan':1}
var restaurants = []
var places = []
var Pleace = function(id,name,des,imgs,location,type){
    this.id=id,
    this.name = name,
    this.des = des,
    this.imgs = imgs,
    this.location =location,
    this.rate = [],
    this.comments = [],
    this.type = type
    places.push(this)
} 
var Restrunt = function(id,name,des,imgs,location,type){
    this.id = id,
    this.name = name,
    this.descrption =des,
    this.imgs = imgs,
    this.location = location
    this.rate = [],
    this.comments = [],
    this.avarge= [],
    this.type = type
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
new Pleace(0,'Amman Citadel','ksldjflkjdslfljdslkjads',['img/DSC_0337-min.JPG',],'Center Downtown Amman','Places')
new Pleace(0,'The Duke\'s Diwan','ksldjflkjdslfljdslkjads',['img/DSC_1227-min.jpg'],'Downtown','Places')
new Pleace(0,'Al Kalha Stakirs','ksldjflkjdslfljdslkjads',['img/IMG_1793-min.jpg'],'Between Jabal Al Lweibdah and Downtown','Places')
new Pleace(0,'Downtown','ksldjflkjdslfljdslkjads',['img/Snapchat-1589789031-min.jpg'],'wastbald','Places')
new Pleace(1,'Petra','ksldjflkjdslfljdslkjads',['img/IMG_3960-min.jpg'],'wastbald','Places')
new Comment(places[0],'yazan','jlkjsdlkj','kldsjfkl')
localStorage.locations = JSON.stringify(locations)
localStorage.restaurants = JSON.stringify(restaurants) 
localStorage.places = JSON.stringify(places) 
var StorgeLoctions = JSON.parse(localStorage.locations)
var StorgeRestaurants = JSON.parse(localStorage.restaurants)
var StorgePlaces = JSON.parse(localStorage.places)