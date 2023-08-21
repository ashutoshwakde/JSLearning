

function swap(n1 ,n2)
{
    console.log('Before swap=> n1', n1, "n2", n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('after swap => n1', n1, "n2", n2);
}
var num1 = 100;
var num2 = 200;
swap(num1, num2);
console.log('End of program');

