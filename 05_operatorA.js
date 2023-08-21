
console.log(`-------------------------Step 1-------------------------`);

function squareOfwordLength(word){
var len = word.length
console.log(`The length of ${word} is: ${len}`);
var multi = len * len;
return multi
}
var result = squareOfwordLength("JavaScript");
console.log(`Square of JavaScript is: ${result}`);

var result = squareOfwordLength("Google Chrome");
console.log(`Square of Google Chrome is: ${result}`);

var result = squareOfwordLength("Developer Smart");
console.log(`Square of Developer Smart is: ${result}`);


console.log(`-------------------------Step 2-------------------------`);

var line = function(value){
var len = value.length;
console.log(`Length of "I am Angular Developer" string is: ${len}`);

var word = value.split(" ");
var str = word.length;
console.log(`Total number of words in "I am Angular Developer" : ${str}`);
var square = len / str;
console.log(`The length is divided by total no of word is: ${square}`);

var square = len * str;
console.log(`The length is multiply by total no of word is: ${square}`);
}
line("I am Angular Developer")