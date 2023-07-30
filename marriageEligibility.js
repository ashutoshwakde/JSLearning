

function voteEligibility(age, gender){ // if block to handle all invalid scenarios
 
    if (age>=18) {
    console.log(`your gender is ${gender} and age is ${age} you are eligible for marriage`);
    } else { 
    console.log(`your gender is ${gender} and age is ${age} you are not eligible for marriage`);
    }

}
voteEligibility(17, "Male");
voteEligibility(28, "Female");
voteEligibility(25, "Male");
voteEligibility(16, "Female"); 
voteEligibility(35, "other"); 
voteEligibility(41, "other"); 

    