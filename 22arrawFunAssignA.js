
console.log(`-------------------Step 1---------------------`);

let show = function(){
    console.log(`Good Morning, Today is Tuesday`);
}
show();

console.log(`-------------------Step 2---------------------`);

let multiply = (num1, num2, num3=1) => {
    let mul = num1*num2*num3
    console.log(`Multiplication is ${mul}`);
}
multiply(5, 5, 2);
multiply(10, 4);

console.log(`-------------------Step 3---------------------`);

let add = (num1,num2,num3,num4,num5)=>{
    sum = num1+num2+num3+num4+num5
    console.log(`Addition is : ${sum}`);
}
add(100,100,200,349,756)
add("I am","learning","ES6",'features',"in depth")




