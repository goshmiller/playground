//CodeSchool Problem. 12/13/2016
//http://javascript-roadtrip-part3.codeschool.com/levels/4/challenges/9
/*
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
 */

/*
 -------------------------------------------------------------------------------------------
 var rockSpearguns = {
 Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
 Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
 Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
 Firefork: {barbs: 6, weight: 8, heft: "overhand"},
 "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
 };

 function listGuns(guns) {
 //console.log(guns);
 for (var speargun in guns) {
 // modify the log message here
 console.log("Behold! " + speargun + ", with " + guns[speargun]["heft"] + " heft!");
 }

 }

 listGuns(rockSpearguns);
 */

var forestCows = [
    {name: "Legolas", type: "calf", hadCalf: null},
    {name: "Gimli", type: "bull", hadCalf: null},
    {name: "Arwen", type: "cow", hadCalf: null},
    {name: "Galadriel", type: "cow", hadCalf: null},
    {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];


Object.prototype.noCalvesYet = function () {
    if (this.type === "cow" && this.hadCalf === null) {
        return true;
    }
    return false;
};


Array.prototype.countForBreeding = function () {
    var numToBreed = 0;
    var i;

    for (i = 0; i < this.length; i += 1) {
        if ( this[i].noCalvesYet() ) {
            numToBreed += 1;
        }
    }
    return numToBreed;
};


console.log(forestCows.countForBreeding());