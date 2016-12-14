//CodeSchool Problem. 12/13/2016
//http://javascript-roadtrip-part3.codeschool.com/levels/4/challenges/9
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";
	var i;
  
  // loop through the rangers and append to list
  for (i = 1;i<=location.numRangers; i+=1)
  {
      list += location["ranger"+i].name + ", man the " + location.weaponBulbs[location["ranger"+i].station - 1][0] + "!\n";
  }
  //console.log(list);
  alert(list);
}

dontPanic(lighthouseRock);