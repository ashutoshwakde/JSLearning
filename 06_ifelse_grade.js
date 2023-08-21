


console.log('--------------------------Step 1--------------------------');



var voteEligibe = function (age){ 

var ageValue = +age; 
if (age<=0 || isNaN(ageValue) || age>120) {
console.log(`your age ${age} is invalid`);
} else { 
if (age>=18) {
console.log(`your age is ${age} & you are eligible for voting`);
} else { 
console.log(`your age is ${age} & you are not eligible for voting`);
}
}
}
voteEligibe(45)
voteEligibe(17)
voteEligibe(8)
voteEligibe(20)
voteEligibe(-10)
voteEligibe(200)
voteEligibe(0)
voteEligibe(undefined)
voteEligibe(null)


var voteEligibe = function (age) {
    var ageValue = +age
    if (age<=0 || isNaN(ageValue) || age>87877) {
        console.log(`error`);
    } else {
        if (age>=18) {
            console.log(`marry me`);
        } else {
            console.log(`get sarkari Naukari first`);
        }
    }
}
voteEligibe(32)
voteEligibe(65)