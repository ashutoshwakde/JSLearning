

// var num = 70;
// if (num < 44) {
//     console.log("no");
// }
// console.log('ok');

// console.log('----------------------------------------');

// var marks = 66;
// if (marks > 60) 
// {
//     console.log("pass");
// }
// else
// {
//     console.log("fail");
// }

// console.log('----------------------------------------');

// function voteEligibility(age , name) {

//     if (age >= 18) {
//         console.log("vote karo");
//     } else {
//         console.log("bhag yaha se");
//     }
// }
// voteEligibility(22 , "sonu");

console.log('----------------------------------------');





function voteEligibility(age, name){ // if block to handle all invalid scenarios

var ageValue = +age; 
if (age<=0 || isNaN(ageValue)) {
console.log(`${name} your age $(age) is invalid`);

} else { // if block to handle all valid scenarios
if (age>=18) {
console.log("${name} you are eligible for vote");
} else { 
console.log("${name}you are not eligible for vote");
}
}
}
voteEligibility(23, "Jenny");
voteEligibility(-20, "Jenny"); 
voteEligibility("UK", "Jenny"); 
voteEligibility("30", "Jenny"); 
voteEligibility(null, "Jenny"); 
voteEligibility(undefined,"Jenny"); 
voteEligibility(150, "Jenny");
