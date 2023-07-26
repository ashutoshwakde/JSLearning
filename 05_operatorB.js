
console.log(`-------------------------Step 1-------------------------`);
var greaterNumber = function(num1, num2){
 var result =  num1 > num2 ? num1 : num2;
 console.log(`Greater number is: ${result}`);
}
greaterNumber(10, -10)
greaterNumber(800, 899)

console.log(`-------------------------Step 2-------------------------`);

var isEvenOrOddNum = function(evenOdd){
    var result = (evenOdd % 2 ==0) ? "Even" : "Odd";
    console.log(`Given number ${evenOdd} is : ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`-------------------------Step 2-------------------------`);

var isEvenOrOddlen = function(num1){
    result = (num1.length % 2 ==0) ? "Even" : "Odd";
    console.log(`length of word ${num1} is: ${result} number`);
}
isEvenOrOddlen(`JavaScript`)
isEvenOrOddlen(`developer`)
isEvenOrOddlen(`Google`)



