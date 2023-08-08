
const arrayNumbers = [20, 32, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`-------------------- Step 1 --------------------`);

console.log(`Length of array - ${arrayNumbers.length}`);

console.log(`-------------------- Step 2 --------------------`);

console.log(`First element is - ${arrayNumbers[0]} & last element is - ${arrayNumbers[10]}`);

console.log(`-------------------- Step 3 --------------------`);

let arrayNumbersLength = arrayNumbers.length;
let elementLast = arrayNumbers[arrayNumbersLength-3];
console.log(`Third last element is : ${elementLast}`);

console.log(`-------------------- Step 4 - Log even indexed element --------------------`);

for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];
        console.log(element); 
    }
    
}

console.log(`-------------------- Step 5 - Log odd indexed element --------------------`);

for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==1) {
        const element = arrayNumbers[index];
        console.log(element); 
    }
    
}

console.log(`-------------------- Step 6 --------------------`);

var addition=0;
 for (var index = 0; index < arrayNumbers.length; index=index+2) {
     const element = arrayNumbers[index];
     addition=addition+element;
    
 }
 console.log(`The addition of even position is ${addition}`);

console.log(`-------------------- Step 7 --------------------`);

var addition=0;
 for (var index = 1; index < arrayNumbers.length; index=index+2) {
     const element = arrayNumbers[index];
     addition=addition+element;
    
 }
 console.log(`The addition of odd position is ${addition}`);

console.log(`-------------------- Step 8 --------------------`);

let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i];   
}
console.log(`sum of all elements - ${sum}`);

console.log(`-------------------- Step 9 --------------------`);

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element%5==0){
       console.log(element);
    }
    
}

console.log(`-------------------- Step 10 --------------------`);

console.log(`Is number 115 available in arrayNumbers - ${arrayNumbers.includes(115)}`);

console.log(`-------------------- Step 11 --------------------`);

console.log(`Is number 23 available in arrayNumbers - ${arrayNumbers.includes(23)}`);

console.log(`-------------------- Step 12 --------------------`);

arrayNumbers.splice(3, 0, 55, 66,)
console.log(arrayNumbers);

console.log(`-------------------- Step 12 --------------------`);

arrayNumbers.splice(4, 3)
console.log(arrayNumbers);
