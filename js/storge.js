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
new Pleace(0,'Amman Citadel','ksldjflkjdslfljdslkjads',['img/DSC_0337-min.JPG','img/DSC_0367-min.JPG','img/DSC_0261-min.JPG','img/DSC_0228-min.JPG','img/20191109_160806-min.jpg','img/20191109_155609-min.jpg'],'Center Downtown Amman','places')
new Pleace(0,'The Duke\'s Diwan','ksldjflkjdslfljdslkjads',['img/DSC_1227-min.jpg','img/DSC_1241-min.JPG','img/20170123_121812-min.jpg','img/20170123_121812-min.jpg','img/20170123_120828-min.jpg'],'Downtown','places')
new Pleace(0,'Al Kalha Stakirs','ksldjflkjdslfljdslkjads',['img/IMG_1792-min.JPG','img/IMG_1793-min.jpg','img/IMG-20190305-WA0036-min.jpg','img/IMG_1854-min.jpg',],'Between Jabal Al Lweibdah and Downtown','places')
new Pleace(0,'Downtown','ksldjflkjdslfljdslkjads',['img/Snapchat-1589789031-min.jpg','img/20150126_114136-min.jpg','img/20150126_114347-min.jpg','img/20160414_122938-min.jpg',],'wastbald','places')
new Pleace(1,'Petra','ksldjflkjdslfljdslkjads',['img/IMG_3960-min.jpg','img/IMG_385-min.jpg','img/IMG_3738-min.jpg','img/IMG_3766-min.jpg','img/IMG_3774-min.jpg','img/IMG_3912-min.jpg'],'wastbald','places')


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
new Avarge(Storge.restaurants[0],'yazan',15)
new Avarge(Storge.restaurants[0],'yazan',5)
new Avarge(Storge.restaurants[1],'yazan',20)
new Avarge(Storge.restaurants[1],'yazan',35)
if(!(localStorage.places)&&!(localStorage.restaurants)&&!(localStorage.locations)){
localStorage.locations = JSON.stringify(Storge.locations)
localStorage.restaurants = JSON.stringify(Storge.restaurants) 
localStorage.places = JSON.stringify(Storge.places) 
}
Storge.locations= JSON.parse(localStorage.locations)
Storge.restaurants = JSON.parse(localStorage.restaurants)
Storge.places = JSON.parse(localStorage.places)