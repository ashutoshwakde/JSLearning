
const arrayFruits = ["Banana", "Orange", "Apple", "Mango","Water Melon"];
console.log(`-------------------- Step 1 --------------------`);

let element0 = arrayFruits[0];
console.log(`Element stored at index 0 is: ${element0}`);
let arrayFruitsLength = arrayFruits.length;
let elementLast = arrayFruits[arrayFruitsLength-1];
console.log(`Last element is : ${elementLast}`);

console.log(`-------------------- Step 2 --------------------`);

arrayFruits.unshift("Papaya")
console.log(arrayFruits);

console.log(`-------------------- Step 3 --------------------`);

arrayFruits.splice(4, 1)
console.log(arrayFruits);

console.log(`-------------------- Step 4 --------------------`);

arrayFruits.push("Pineapple")
console.log(arrayFruits);

console.log(`-------------------- Step 5 --------------------`);

arrayFruits.splice(4, 0, "Dragon Fruit")
console.log(arrayFruits);

console.log(`-------------------- Step 6 --------------------`);

const index = arrayFruits.indexOf("Orange")
arrayFruits.splice(index, 2 , "Kiwi")
console.log(arrayFruits);

console.log(`-------------------- Step 7 --------------------`);

arrayFruits.splice(4)
console.log(arrayFruits);

console.log(`-------------------- Step 8 --------------------`);

length = arrayFruits.length
console.log(arrayFruits.slice(length-3,length));