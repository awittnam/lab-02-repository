
'use strict';
//DOG CONSTRUCTOR
function Creature(creature) {        
  this.image_url = creature.image_url;
  this.title = creature.title;
  this.description = creature.description;
  this.keyword = creature.keyword;
  this.horns = creature.horns;

}
Creature.allCreatures = [];

//---------------------
//ADDING RENDER METHOD USING DOG.PROTOTYPE
Creature.prototype.render = function() {
  $('main').append('<div class="clone"></div>'); //APPENDS A DIV CLASS=CLONE TO MAIN (HTML TAG)
  let creatureClone = $('div[class="clone"]'); //HTML ELEMENT 
  let creatureHtml = $('#creature-template').html(); //CONTENTS (INNERHTML) OF DOG-TEMPLATE
  creatureClone.html(creatureHtml) //CONTENTS OF DOGCLONE IS NOW DOGHTML
  creatureClone.find('h2').text(this.title); //RETURNS FIRST H2 TAG AVAILABLE IN DOG-TEMPLATE CLASS AND SETS THE TEXT TO THIS.NAME
  creatureClone.find('img').attr('src', this.image_url); //RETURNS FIRST IMG TAG AVAILABLE IN DOG-TEMPLATE CLASS AND SETS THE TEXT TO THIS.NAME
  creatureClone.find('p').text(this.description);
  creatureClone.find('p').text(this.keyword);//
  creatureClone.find('p').text(this.horns);
  creatureClone.removeClass('clone'); //REMOVES #DOG-TEMPLATE CLASS
  creatureClone.attr('class', this.name); //SETTING DOGCLONE ATTR TO THIS.NAME
}
Creature.readJson = () => {   //this is where we link to the data file
  $.get('../data/page-1.json', 'json')
    .then(data => {
      data.forEach(obj => {
        Creature.allCreatures.push(new Creature(obj)); //PUSHES DOGS TO ALLDOGS[]
      })
    })
    .then(Creature.loadCreatures)
}
Creature.loadCreatures = () => { //CALLS THE RENDER FUNCTION FOR EACH DOG OBJ
  Creature.allCreatures.forEach(creature => creature.render())
}
$(() => Creature.readJson()); //CALLS READJSON



// Collapse 

// Message Input

// Message Jacob Anderson



// 'use strict';
// //DOG CONSTRUCTOR
// function Dog(dog) {   
//   this.name = dog.name;     
//   this.image_url = dog.image_url;
//   this.hobbies = dog.hobbies;
// }
// Dog.allDogs = [];
// //---------------------
// //ADDING RENDER METHOD USING DOG.PROTOTYPE
// Dog.prototype.render = function() {
//   $('main').append('<div class="clone"></div>'); //APPENDS A DIV CLASS=CLONE TO MAIN (HTML TAG)
//   let dogClone = $('div[class="clone"]'); //HTML ELEMENT 
//   let dogHtml = $('#dog-template').html(); //CONTENTS (INNERHTML) OF DOG-TEMPLATE
//   dogClone.html(dogHtml) //CONTENTS OF DOGCLONE IS NOW DOGHTML
//   dogClone.find('h2').text(this.name); //RETURNS FIRST H2 TAG AVAILABLE IN DOG-TEMPLATE CLASS AND SETS THE TEXT TO THIS.NAME
//   dogClone.find('img').attr('src', this.image_url); //RETURNS FIRST IMG TAG AVAILABLE IN DOG-TEMPLATE CLASS AND SETS THE TEXT TO THIS.NAME
//   dogClone.find('p').text(this.hobbies);
//   dogClone.removeClass('clone'); //REMOVES #DOG-TEMPLATE CLASS
//   dogClone.attr('class', this.name); //SETTING DOGCLONE ATTR TO THIS.NAME
// }
// Dog.readJson = () => {   //this is where we link to the data file
//   $.get('data.json', 'json')
//     .then(data => {
//       data.forEach(obj => {
//         Dog.allDogs.push(new Dog(obj)); //PUSHES DOGS TO ALLDOGS[]
//       })
//     })
//     .then(Dog.loadDogs)
// }
// Dog.loadDogs = () => { //CALLS THE RENDER FUNCTION FOR EACH DOG OBJ
//   Dog.allDogs.forEach(dog => dog.render())
// }
// $(() => Dog.readJson()); //CALLS READJSON



// Collapse 

// Message Input

// Message Jacob Anderson