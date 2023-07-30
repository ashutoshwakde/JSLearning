

console.log('----------------------------------------------Assignment 1----------------------------------------------');

let result

result = '3' + 2;
console.log(`'3' + 2 - result is ${result} because number is converted into string`);

result = '3' + true;
console.log(`'3' + true - result is ${result} because true is Boolean type is implicity converted to string`);

result = '3' + undefined;
console.log(`'3' + undefined - result is ${result} because undefined is implicity converted to string`);

result = '3' + null;
console.log(`'3' + null - result is ${result} because null is implicity converted to string`);

console.log('----------------------------------------------Assignment 2----------------------------------------------');

result = '4' - true;
console.log(`'4' - true - result is ${result} because "4" is string type converted ti number & true is boolean converted to number double conversion 4-1`);

result = 4 + true;
console.log(`4 + true - result is ${result} because value of true is 1 so 4+1`);

result = 4 + false;
console.log(`4 + false - result is ${result} because value of false is 0 so 4-0`);


console.log('----------------------------------------------Assignment 3----------------------------------------------');


result = '4' - '2';
console.log(`'4' - '2' - result is ${result} because here string is converted to number`);

result = '4' - 2;
console.log(`'4' - 2 - result is ${result} because here string is converted to number`);

result = '4' * 2;
console.log(`'4' * 2 - result is ${result} because here string is converted to number`);

result = '4' / 2;
console.log(`'4' / 2 - result is ${result} because here string is converted to number`);


console.log('----------------------------------------------Assignment 4----------------------------------------------');

result = 0 == '';
console.log(`0 == '' - result is ${result} because space is get converted into number`);

result = 0 == '0';
console.log(`0 == '0' - result is ${result} because 0 is get converted into string`);

result = 0 == false;
console.log(`0 == false - result is ${result} because value of false is 0`);

result = null == undefined;
console.log(`null == undefined - result get ${result} because loosely equal as both having different type`);

result = 1 == [1];
console.log(`1 == [1] - result is ${result} both are of same type`);

result = 1 == true;
console.log(`1 == true - result is ${result} because value of true is 1`);

result = 1 == '1';
console.log(`1 == '1' - result is ${result} because string is converted into number`);