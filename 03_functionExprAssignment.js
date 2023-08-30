console.log(`-------------------------Step 1-------------------------`);

var square = function (num) {
  var result = num * num;
  console.log(` Square of Number ${num} is : ${result}`);
};
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);


console.log(`-------------------------Step 2-------------------------`);

console.log("The type of function is :", typeof square);

console.log(`-------------------------Step 3-------------------------`);

var rectangle = function (length, width) {
  var result = length * width;
  console.log(` Area of rectangle is :${result}`);
};
rectangle(499, 917);

console.log(`-------------------------Step 4-------------------------`);

var mahi = "mahi";
var raina = "raina";
console.log("Before Swap=====>", "name1:", mahi, "name2:", raina);
var temp = mahi;
mahi = raina;
raina = temp;
console.log("After Swap=====>", "name1:", mahi, "name2:", raina);

function swap(n1, n2) {
  console.log("Before swap=> n1:", n1, "n2:", n2);
  var temp = n1;
  n1 = n2;
  n2 = temp;
  console.log("after swap => n1:", n1, "n2:", n2);
}
var num1 = 55;
var num2 = 77;
swap(num1, num2);

console.log(`-------------------------Step 5-------------------------`);

var str = function (value) {
  console.log("Total character available in string is:", value.length);
  var ok = value.charAt(6);
  console.log(`Character at index 6 is :${ok}`);
  var no = value.charAt(11);
  console.log(`Character at index 11 is :${no}`);
  var last = value.charAt(42);
  console.log(`last Character is :${last}`);
  var first = value.charAt(0);
  console.log(`First Character is :${first}`);

  var word = value.split(" ");
  var str = word.length;
  console.log(`Total number of words is : ${str}`);
  var square = str * str;
  console.log(`Square of words:${square}`);
};
str("JS is the most popular language of internet");
