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
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus quibusdam corrupti. Recusandae nihil vero molestiae natus ipsam eos voluptates repudiandae, eaque nemo aspernatur quae dolores rerum exercitationem illo veniam?
  Officiis necessitatibus dolores quas, sunt placeat consequuntur. Natus rerum eum similique minima placeat tenetur, dolorum doloremque in quod, praesentium eligendi. Corrupti vitae nesciunt maiores perspiciatis blanditiis. Enim esse similique sed.
  Pariatur odio quia, voluptates dignissimos laudantium recusandae quisquam repellat quasi doloribus inventore magnam iusto officia reiciendis blanditiis ratione, libero laborum excepturi dolores cumque cupiditate sequi est error! Saepe, deserunt possimus?
  Dolorem nostrum sequi doloremque maxime recusandae esse quia assumenda repellendus natus. Voluptatum maxime deserunt, assumenda numquam ab voluptas necessitatibus reiciendis placeat nam iusto vel veniam soluta aliquam minus, facilis aspernatur.`,
  [
    'img/DSC_0337-min.JPG',
    'img/DSC_0367-min.JPG',
    'img/DSC_0261-min.JPG',
    'img/DSC_0228-min.JPG',
    'img/20191109_160806-min.jpg',
    'img/20191109_155609-min.jpg'
  ],
  'Center Downtown Amman',
  'places'
);
new Pleace(
  0,
  'The Duke\'s Diwan',
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus quibusdam corrupti. Recusandae nihil vero molestiae natus ipsam eos voluptates repudiandae, eaque nemo aspernatur quae dolores rerum exercitationem illo veniam?
  Officiis necessitatibus dolores quas, sunt placeat consequuntur. Natus rerum eum similique minima placeat tenetur, dolorum doloremque in quod, praesentium eligendi. Corrupti vitae nesciunt maiores perspiciatis blanditiis. Enim esse similique sed.
  Pariatur odio quia, voluptates dignissimos laudantium recusandae quisquam repellat quasi doloribus inventore magnam iusto officia reiciendis blanditiis ratione, libero laborum excepturi dolores cumque cupiditate sequi est error! Saepe, deserunt possimus?
  Dolorem nostrum sequi doloremque maxime recusandae esse quia assumenda repellendus natus. Voluptatum maxime deserunt, assumenda numquam ab voluptas necessitatibus reiciendis placeat nam iusto vel veniam soluta aliquam minus, facilis aspernatur.`,
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
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus quibusdam corrupti. Recusandae nihil vero molestiae natus ipsam eos voluptates repudiandae, eaque nemo aspernatur quae dolores rerum exercitationem illo veniam?
  Officiis necessitatibus dolores quas, sunt placeat consequuntur. Natus rerum eum similique minima placeat tenetur, dolorum doloremque in quod, praesentium eligendi. Corrupti vitae nesciunt maiores perspiciatis blanditiis. Enim esse similique sed.
  Pariatur odio quia, voluptates dignissimos laudantium recusandae quisquam repellat quasi doloribus inventore magnam iusto officia reiciendis blanditiis ratione, libero laborum excepturi dolores cumque cupiditate sequi est error! Saepe, deserunt possimus?
  Dolorem nostrum sequi doloremque maxime recusandae esse quia assumenda repellendus natus. Voluptatum maxime deserunt, assumenda numquam ab voluptas necessitatibus reiciendis placeat nam iusto vel veniam soluta aliquam minus, facilis aspernatur.`,
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
  'Downtown',
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus quibusdam corrupti. Recusandae nihil vero molestiae natus ipsam eos voluptates repudiandae, eaque nemo aspernatur quae dolores rerum exercitationem illo veniam?
  Officiis necessitatibus dolores quas, sunt placeat consequuntur. Natus rerum eum similique minima placeat tenetur, dolorum doloremque in quod, praesentium eligendi. Corrupti vitae nesciunt maiores perspiciatis blanditiis. Enim esse similique sed.
  Pariatur odio quia, voluptates dignissimos laudantium recusandae quisquam repellat quasi doloribus inventore magnam iusto officia reiciendis blanditiis ratione, libero laborum excepturi dolores cumque cupiditate sequi est error! Saepe, deserunt possimus?
  Dolorem nostrum sequi doloremque maxime recusandae esse quia assumenda repellendus natus. Voluptatum maxime deserunt, assumenda numquam ab voluptas necessitatibus reiciendis placeat nam iusto vel veniam soluta aliquam minus, facilis aspernatur.`,
  [
    'img/Snapchat-1589789031-min.jpg',
    'img/20150126_114136-min.jpg',
    'img/20150126_114347-min.jpg',
    'img/20160414_122938-min.jpg'
  ],
  'wastbald',
  'places'
);
new Pleace(
  1,
  'Petra',
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus quibusdam corrupti. Recusandae nihil vero molestiae natus ipsam eos voluptates repudiandae, eaque nemo aspernatur quae dolores rerum exercitationem illo veniam?
  Officiis necessitatibus dolores quas, sunt placeat consequuntur. Natus rerum eum similique minima placeat tenetur, dolorum doloremque in quod, praesentium eligendi. Corrupti vitae nesciunt maiores perspiciatis blanditiis. Enim esse similique sed.
  Pariatur odio quia, voluptates dignissimos laudantium recusandae quisquam repellat quasi doloribus inventore magnam iusto officia reiciendis blanditiis ratione, libero laborum excepturi dolores cumque cupiditate sequi est error! Saepe, deserunt possimus?
  Dolorem nostrum sequi doloremque maxime recusandae esse quia assumenda repellendus natus. Voluptatum maxime deserunt, assumenda numquam ab voluptas necessitatibus reiciendis placeat nam iusto vel veniam soluta aliquam minus, facilis aspernatur.`,
  [
    'img/IMG_3960-min.jpg',
    'img/IMG_385-min.jpg',
    'img/IMG_3738-min.jpg',
    'img/IMG_3766-min.jpg',
    'img/IMG_3774-min.jpg',
    'img/IMG_3912-min.jpg'
  ],
  'wastbald',
  'places'
);

new Pleace(
  1,
  'Abu zagla',
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus quibusdam corrupti. Recusandae nihil vero molestiae natus ipsam eos voluptates repudiandae, eaque nemo aspernatur quae dolores rerum exercitationem illo veniam?
  Officiis necessitatibus dolores quas, sunt placeat consequuntur. Natus rerum eum similique minima placeat tenetur, dolorum doloremque in quod, praesentium eligendi. Corrupti vitae nesciunt maiores perspiciatis blanditiis. Enim esse similique sed.
  Pariatur odio quia, voluptates dignissimos laudantium recusandae quisquam repellat quasi doloribus inventore magnam iusto officia reiciendis blanditiis ratione, libero laborum excepturi dolores cumque cupiditate sequi est error! Saepe, deserunt possimus?
  Dolorem nostrum sequi doloremque maxime recusandae esse quia assumenda repellendus natus. Voluptatum maxime deserunt, assumenda numquam ab voluptas necessitatibus reiciendis placeat nam iusto vel veniam soluta aliquam minus, facilis aspernatur.`,
  ['img/IMG_3960-min.jpg'],
  'wastbald',
  'restaurants'
);
new Pleace(
  1,
  'KFC',
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus quibusdam corrupti. Recusandae nihil vero molestiae natus ipsam eos voluptates repudiandae, eaque nemo aspernatur quae dolores rerum exercitationem illo veniam?
  Officiis necessitatibus dolores quas, sunt placeat consequuntur. Natus rerum eum similique minima placeat tenetur, dolorum doloremque in quod, praesentium eligendi. Corrupti vitae nesciunt maiores perspiciatis blanditiis. Enim esse similique sed.
  Pariatur odio quia, voluptates dignissimos laudantium recusandae quisquam repellat quasi doloribus inventore magnam iusto officia reiciendis blanditiis ratione, libero laborum excepturi dolores cumque cupiditate sequi est error! Saepe, deserunt possimus?
  Dolorem nostrum sequi doloremque maxime recusandae esse quia assumenda repellendus natus. Voluptatum maxime deserunt, assumenda numquam ab voluptas necessitatibus reiciendis placeat nam iusto vel veniam soluta aliquam minus, facilis aspernatur.`,
  ['img/IMG_3960-min.jpg'],
  'wastbald',
  'restaurants'
);

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
