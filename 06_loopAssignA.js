
// console.log(`---------------------------Step 1---------------------------------`);

// function vowelCount(str){
//     let count = 0;
//     for (let index = 0; index < str.length; index++) {
//         let char = str.charAt(index);
//         if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
//             char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
//             console.log(char); 
//             count = count + 1;
//         }
//     }
//     console.log(`Total number of vowels is: ${count}`);
// }
// vowelCount("I am very good IT Developer");

// console.log(`----------------------------Step 2--------------------------------`);


// let sum = function(){
//     let totalSum = 0;
//     let sumOfCube = 0;
//      for (let index = 1; index <=5; index++) {
//          totalSum = totalSum + index;
//          sumOfCube = sumOfCube + index * index * index
//      }
//      console.log(`Sum of first 5 numbers is : ${sumOfCube}`);
//  }
//  sum();

//  console.log(`----------------------------Step 2--------------------------------`);

//  function oddPositionedChars(str1, str2) {
//     let string = str1+str2;
//     for (let index = 1; index < string.length; index++) {
//         const char = string.charAt(index);
//         if ((index%2 !=0 && char != ' ')) {
//             console.log(`odd characters in given string : ${char}`);

//         }
//     }

// }
// oddPositionedChars("Hard work always pays back");
// oddPositionedChars("Soon I will be Angular IT Champ");













console.log(`------------------------------ Step 1 ------------------------------`);

function vowelCount(str){
    
    let count = 0;
    let index = 0;
while ( index < str.length) {
    index++;
     
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good UI Developer");


console.log(`------------------------------ Step 2 ------------------------------`);
let sumOfCube= function(){
    let totalSum = 0;
     for (let index = 1; index <=5; index++) {
         totalSum = totalSum + index*index*index;
     }
     console.log(`Sum of cube of numbers from 1 to 5 is : ${totalSum}`);
 

}
sumOfCube(1)


console.log(`------------------------------ Step 3 ------------------------------`);

let oddPositionedChars = function(str){
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        if ((index%2 !=0 && char != ' ')) {
            console.log(`odd numbers is : ${char}`);

        }
    }
console.log(`---------------------------------`);
}
oddPositionedChars('Hard work always pays back')
oddPositionedChars('Soon I will be Angular IT Champ')


