document.writeln('Hello, world!');

/** 
//This is an Immediately Invoked Function (IIFy)
(function () {
//console.log('Executed!');
})();


//Pluralsight Rapid JavaScript Training - Functions
//https://app.pluralsight.com/player?course=rapid-javascript-training&author=mark-zamoyta&name=rapid-javascript-training-m7&clip=6&mode=live
var app = {};

(function (ns) {
    ns.name = 'Josh';
})(app);
//console.log(app.name);


//Trying more
var app2 = {};
var jQuery = {};

(function (ns, $) {
    ns.name = 'Josh';
    console.log($ === jQuery);
    console.log(jQuery);
})(app2, jQuery);
*/

console.log("screenLeft:"+window.screenLeft + ", screenTop:" + window.screenTop);
console.log("innerWidth:"+window.innerWidth + ", outerWidth:" + window.outerWidth);



