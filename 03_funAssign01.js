


function show(){
    console.log('function 1');
}
show(); 



function display() {
    console.log('function 2');
}
display();


console.log('-----------------------------------------------------');


function checkType(firstName, lastName, collegeName){
    console.log('First Name:', firstName, 'Last Name: ', lastName, 'College Name: ', collegeName);

}
checkType("Ashutosh", "Wakde","Mauli");

console.log('-----------------------------------------------------');

function swapValues(n1 ,n2){
    console.log('Before swapping => value 1:', n1, "value 2:", n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('after swapping => value1:', n1, "value 2:", n2);
}
var num1 = 1000;
var num2 = 2000;
swapValues(num1, num2);

var num1 = "virat"
var num2 = "anushka"
swapValues(num1, num2);

console.log('-----------------------------------------------------');


function addThreeValues(arg1, arg2, arg3){
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addThreeValues(10.23, 600, 40);
console.log('addition is: ', res);
var res = addThreeValues('Hello', 'Good', 'Morning')
console.log('addition is: ', res);

console.log('-----------------------------------------------------');



function bankDetails(bankName, accountNum, location, pincode){
    console.log('Bank Name:', bankName, 'Account number: ', accountNum, 'location: ', location, 'pincode:',pincode );

}
bankDetails("CITI Bank", "3456782345","pune", "431202");
bankDetails("Axis Bank", "78912345678","mumbai", "425103");
bankDetails("HDFC Bank", "8956782345","pune", "631202", "open");