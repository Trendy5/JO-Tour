'use strict';
var Storge = {
    locations: {'Amman':0,'Maan':1},
    restaurants : [],
    places : []
}

var Pleace = function(id,name,des,imgs,location,type){
    this.id=id,
    this.name = name,
    this.des = des,
    this.imgs = imgs,
    this.location =location,
    this.rate = [],
    this.comments = [],
    this.type = type
    Storge.places.push(this)
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
    Storge.restaurants.push(this)
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
var Avarge = function(object,user_name,avg){
    this.user_name = user_name,
    this.avg = avg,
    object.avarge.push(this)
}
new Pleace(0,'Amman Citadel','ksldjflkjdslfljdslkjads',['img/DSC_0337-min.JPG',],'Center Downtown Amman','places')
new Pleace(0,'The Duke\'s Diwan','ksldjflkjdslfljdslkjads',['img/DSC_1227-min.jpg'],'Downtown','places')
new Pleace(0,'Al Kalha Stakirs','ksldjflkjdslfljdslkjads',['img/IMG_1793-min.jpg'],'Between Jabal Al Lweibdah and Downtown','places')
new Pleace(0,'Downtown','ksldjflkjdslfljdslkjads',['img/Snapchat-1589789031-min.jpg'],'wastbald','places')
new Pleace(1,'Petra','ksldjflkjdslfljdslkjads',['img/IMG_3960-min.jpg'],'wastbald','places')
new Restrunt(1,'Abu zagla','ksldjflkjdslfljdslkjads',['img/IMG_3960-min.jpg'],'wastbald','restaurants')
new Restrunt(1,'KFC','ksldjflkjdslfljdslkjads',['img/IMG_3960-min.jpg'],'wastbald','restaurants')
new Comment(Storge.places[0],'yazan','jlkjsdlkj','kldsjfkl')
new Rate(Storge.places[0],'yazan',10)
new Rate(Storge.places[0],'yazan',10)
new Rate(Storge.places[0],'yazan',4)
new Rate(Storge.places[0],'yazan',6)
new Rate(Storge.places[0],'yazan',4)
new Rate(Storge.places[1],'yazan',2)
new Rate(Storge.places[1],'yazan',10)
new Rate(Storge.places[1],'yazan',10)
new Rate(Storge.places[1],'yazan',3)
new Rate(Storge.places[1],'yazan',6)
new Rate(Storge.places[1],'yazan',2)
new Rate(Storge.places[2],'yazan',10)
new Rate(Storge.places[2],'yazan',10)
new Rate(Storge.places[2],'yazan',10)
new Rate(Storge.places[2],'yazan',4)
new Rate(Storge.places[2],'yazan',0)
new Rate(Storge.places[2],'yazan',0)
new Rate(Storge.places[2],'yazan',0)
new Avarge(Storge.restaurants[0],'yazan',20)
if(!(localStorage.places)&&!(localStorage.restaurants)&&!(localStorage.locations)){
localStorage.locations = JSON.stringify(Storge.locations)
localStorage.restaurants = JSON.stringify(Storge.restaurants) 
localStorage.places = JSON.stringify(Storge.places) 
}
Storge.locations= JSON.parse(localStorage.locations)
Storge.restaurants = JSON.parse(localStorage.restaurants)
Storge.places = JSON.parse(localStorage.places)