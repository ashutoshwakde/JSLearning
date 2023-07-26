var display = function () {
  console.log(`I am UI developer`);
};
display();
console.log(typeof display);

var add = function (num1, num2) {
  var result = num1 + num2;
  console.log(`${result}`);
};
add(39, 88);

var wordCount = function (word) {
  var words = word.split(" ");
  var wordCount = words.length;
  console.log(`${word}`);
  return wordCount;
};
var result = wordCount("i am developer");
console.log(`${result}`);
