



// let professor = {
//     name : "AShutosh",
//     state : "MH",
//     city : "Shegaon",
//     isMarried: true,
//     degrees : {
//         engineering : 'CSC',
//         PHD : 'Adv Computing'
//     },
    
//     certificate : ['Hacker Rank participation', 'Certificate in IFE course', 'Certificate in Adv Programming'],
// }

// professor.totalExperience = "14 years"
// console.log(professor);

// professor.name = "Sonu";
// console.log(professor);


// professor.certificate.push("Oracle Certified");
// console.log(professor);

// professor.certificate.pop()





const professor = {
    name : "AShutosh",
    state : "MH",
    city : "Shegaon",
    isMarried: true,
    degrees : {
        engineering : 'CSE',
        PHD : 'Adv Computing'
    },
     certificates : ['Hacker Rank Participation', 'Certificate in IFE course', 'Certificate in Adv Programming'],
     teacherDegrees : function(){
        let prof = this.degrees.engineering + this.degrees.PHD
        console.log(`Teacher degrees : ${prof}`);
     },
     totalExperience : 14,
}
professor.teacherDegrees()
console.log(professor.totalExperience);

professor.name = "Sonu";
console.log(professor);

professor.certificates.push("Oracle Certified")
console.log(professor.certificates);

lastElement =professor.certificates.slice(-1)
console.log(lastElement);