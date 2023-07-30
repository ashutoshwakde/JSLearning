

console.log('--------------------------Step 1--------------------------');

function check(num1){
    if (num1%2==0) {
        console.log(`value ${num1} is even`);
    } else {
        console.log(`value ${num1} is odd`);
    }
}
check(45)
check(70)
check(67)
check(98)

console.log('--------------------------Step 2--------------------------');

function display(str){
    var len = str.length
    // console.log(len);

    if (len > 10) {
        console.log('"JavaScript - ES6" string contain more than 10 character');
    } else {
        console.log('string contain more than 10 character');
    }
}
display("JavaScript - ES6")


console.log('--------------------------Step 3--------------------------');

function show(value){
  if ("value is string") {
    console.log(`String "${value}" start with 'java' `);
  } else {
    console.log(`String "${value}" not start with 'java' `);
  }
}
show("JavaScript Language")





