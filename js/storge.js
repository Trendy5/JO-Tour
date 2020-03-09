'use strict';
var Storge = {
  locations: { Amman: 0, Maan: 1 },
  // restaurants : [],
  places: []
};

var Pleace = function(id, name, des, imgs, location, type) {
  (this.id = id),
  (this.name = name),
  (this.des = des),
  (this.imgs = imgs),
  (this.location = location),
  (this.rate = [{ user_name: 'defulte', rate: 1 }]),
  (this.comments = []),
  (this.avarge = []),
  (this.type = type);
  Storge.places.push(this);
};
// var Restrunt = function(id,name,des,imgs,location,type){
//     this.id = id,
//     this.name = name,
//     this.descrption =des,
//     this.imgs = imgs,
//     this.location = location
//     this.rate = [],
//     this.comments = [],
//     this.avarge= [],
//     this.type = type
//     Storge.restaurants.push(this)
// }
var Comment = function(object, user_name, comment, time) {
  (this.user_name = user_name),
  (this.comment = comment),
  (this.time = time),
  Storge.places[object].comments.push(this);

  // object.comments.push(this)
};
var Rate = function(object, user_name, rate) {
  (this.user_name = user_name),
  (this.rate = rate),
  Storge.places[object].rate.push(this);

  // object.rate.push(this)
};
var Avarge = function(object, user_name, avg) {
  (this.user_name = user_name),
  (this.avg = avg),
  Storge.places[object].avarge.push(this);
  // console.log(Storge.places[object].avarge)
};
new Pleace(
  0,
  'Amman Citadel',
  ` Towering above the capital city of Amman on a hill is the Amman Citadel. This historic site comprises a 1700 meter wall that dates back to the Bronze Age, the iconic Temple of Hercules, and the Umayyad Palace. With so many significant landmarks located one site, the Amman Citadel is arguably one of the best places to visit in Amman.`,
  [
    'img/DSC_0337-min.JPG',
    'img/DSC_0367-min.JPG',
    'img/DSC_0261-min.JPG',
    'img/DSC_0228-min.JPG',
    'img/20191109_160806-min.jpg',
    'img/20191109_155609-min.jpg'
  ],
  'K. Ali Ben Al-Hussein St. 146, Amman',
  'places'
);
new Pleace(
  0,
  'The Duke\'s Diwan',
  ` Amman's oldest home “The Duke's Diwan”The oldest residence in the city, located just a stones-throw from the bustling souks of downtown, the Duke’s Diwan has an open door policy of accepting all curious willing to climb the steep staircase leading to its storied rooms.`,
  [
    'img/DSC_1227-min.jpg',
    'img/DSC_1241-min.JPG',
    'img/20170123_121812-min.jpg',
    'img/20170123_121812-min.jpg',
    'img/20170123_120828-min.jpg'
  ],
  'Downtown',
  'places'
);
new Pleace(
  0,
  'Al Kalha Stakirs',
  `a walk to the downtown streets and stairs is enough to fill you with several memorable experiences. The magic of 
  Al Kalha Stairs is that it will  lead you to the heart of Amman,it’s not like any other stairs you can find art that speaks directly to your soul. `,
  [
    'img/IMG_1792-min.JPG',
    'img/IMG_1793-min.jpg',
    'img/IMG-20190305-WA0036-min.jpg',
    'img/IMG_1854-min.jpg'
  ],
  'Between Jabal Al Lweibdah and Downtown',
  'places'
);

new Pleace(
  0,
  'Darat al Funun',
  `A home for the arts and artists from the Arab world. A quiet series of spaces, views and restored buildings which provide views over Amman and an insight into the history of the city. Small art exhibitions and an archaeological site means that it is a quiet and satisfying diversion from the more intense historical sites - I visited later one afternoon. Beautiful tiled floors, high ceilings and large windows make for beautifully attractive ex-homes and good spaces for modern art. `,
  [
    'img/IMG_0882-min.JPG'
  ],
  ' Jabal Al Lweibdah',
  'places'
);

new Pleace(
  0,
  'Downtown',
  `The Balad is the oldest section of the city, being the one that was originally inhabited during the Neolithic period around 6500 B.C.[2] The seven jabals, or hills, around it were occupied during the same time and formed the perimeter of the young city, most notably the Citadel atop Citadel Hill. Downtown Amman is made up of a myriad of souq[2] markets and independently owned businesses. The area's long history leaves a large number of historical sites, such as the Amman Citadel with the Umayyad Palace, the Hashemite Plaza with the Roman Theatre and the Odeon, and the Roman Nymphaeum.`,
  [
    
    'img/20150126_114136-min.jpg',
    'img/20150126_114347-min.jpg',
    'img/20160414_122938-min.jpg'
  ],
  'wastbald',
  'places'
);

new Pleace(
  0,
  'THE BOULEVARD',
  `The Boulevard is a mixed-use complex, centrally located within the heart of Abdali. It features a long pedestrian promenade, bordered by 12 buildings housing retail outlets, food & beverage concepts, modern office spaces, exclusive rooftop lounges, as well as luxurious hotel serviced apartments, managed and operated by Arjaan Rotana.`,
  [
    
    'img/20151107_150524-min.jpg','img/20170511_161128-min.jpg'
    
  ],
  'Abdali',
  'places'
);
new Pleace(
  1,
  'Petra',
  `The city of Petra, capital of the Nabataean Arabs, is one of the most famous archaeological sites in the world, it is Located 240 km south of the capital Amman and 120 km north of the red sea town of Aqaba , Petra the world wonder is undoubtedly Jordan's most valuable treasure and greatest tourist attraction, and it is visited by tourists from all over the world.

  It is not known precisely when Petra was built, but the city began to prosper as the capital of the Nabataean Empire from the 1st century BC, which grew rich through trade in frankincense, myrrh, and spices. `,
  [
    'img/IMG_3960-min.jpg',
    'img/IMG_385-min.jpg',
    'img/IMG_3738-min.jpg',
    'img/IMG_3766-min.jpg',
    'img/IMG_3774-min.jpg',
    'img/IMG_3912-min.jpg'
  ],
  'Ma\'an',
  'places'
);

new Pleace(
  0,
  'Zayzafon',
  ` Zayzafoun is a cozy restaurant in the middle of Al Kalha Stairs that serves the most traditional heartwarming breakfast.Everything about Downtown Amman will surely make your walk a memorable one from the drawings to the books to the old artistic stores`,
  ['img/IMG_1836-min.jpg','img/IMG_17777-min.jpg','img/IMG_1793-min.jpg'],
  'Daraj Al Kalha,Amman',
  'restaurants'
);
new Pleace(
  0,
  'Hashem restaurant',
  `Hashem Restaurant, located in downtown Amman, is one of the most well known of all local food restaurants in the city they serve a basic set of dishes that never changes`,
  ['img/Snapchat-1589789031-min.jpg','img/20170123_111307-min.jpg'],
  ' King Faisal Street Amman, ʿAmman',
  'restaurants'
);

new Pleace(
  0,
  'Palestine juice',
  `One of the most famous juice makers in the city center
  It is known for its many delicious flavors, from cocktails to natural juices
  You can choose the flavor you like and enjoy drinking your favorite juice cold while you are walking around downtown`,
  ['img/20170123_124523-min.jpg','img/DSC_1283-min.JPG'],
  ' Downtown, ʿAmman',
  'restaurants'
);

new Pleace(
  0,
  'Zajal restaurant',
  `This is an amazing place that you need to try if you are visiting Jordan for the first time, or you are a local.

  There is a lot of thinking went into the design of the entrance... The stairs are used as a meeting point for people who are engaged or about to marry, they are writing their names on a lock and fixing it to the rails. Also the stairs are covered by Umbrellas which add warmth.
  
  It is really nice from inside, plenty of local artist paintings are shown on the walls. Calligraphy of well known phrases from poets and writers are shown on the walls as well... Makes you think.`,
  ['img/Snapchat-7990753144032653412-min.jpg'],
  ' Downtown, ʿAmman',
  'restaurants'
);

new Comment(0, 'yazan', 'jlkjsdlkj', 'kldsjfkl');
new Comment(0, 'yazan', 'jlkjsdlkj', 'kldsjfkl');
new Comment(0, 'yazan', 'jlkjsdlkj', 'kldsjfkl');
new Rate(0, 'yazan', 5);
new Rate(0, 'yazan', 5);
new Rate(0, 'yazan', 4);
new Rate(0, 'yazan', 5);
new Rate(0, 'yazan', 4);
new Rate(1, 'yazan', 2);
new Rate(1, 'yazan', 5);
new Rate(1, 'yazan', 5);
new Rate(1, 'yazan', 3);
new Rate(1, 'yazan', 5);
new Rate(1, 'yazan', 2);
new Rate(2, 'yazan', 5);
new Rate(2, 'yazan', 5);
new Rate(2, 'yazan', 5);
new Rate(2, 'yazan', 4);
new Rate(2, 'yazan', 0);
new Rate(2, 'yazan', 0);
new Rate(2, 'yazan', 0);
new Avarge(0, 'yazan', 20);
new Avarge(0, 'yazan', 15);
new Avarge(0, 'yazan', 5);
new Avarge(1, 'yazan', 20);
new Avarge(1, 'yazan', 35);
if (!localStorage.places && !localStorage.locations) {
  localStorage.locations = JSON.stringify(Storge.locations);
  // localStorage.restaurants = JSON.stringify(Storge.restaurants)
  localStorage.places = JSON.stringify(Storge.places);
}
Storge.locations = JSON.parse(localStorage.locations);
// Storge.restaurants = JSON.parse(localStorage.restaurants)
Storge.places = JSON.parse(localStorage.places);
