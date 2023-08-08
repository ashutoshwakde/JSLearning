

bankSbi = {
    bankName : "SBI",
    year : 1788,
    founder : "Govern"
}

bankLOcation = {
    street : "Akola",
    city : "Shegaon",
    pinCode : 444203,
}

let clone = Object.assign(bankSbi , bankLOcation); // Deep Clone
console.log(clone);

let sec = {...bankSbi};
console.log(sec);


rateOfInterest = {
    homeLoanInterest : 10,
    personalLoanInterest : 20,
    dueInterest : 30
}


let sbiDetails = Object.assign({} , bankSbi, bankLOcation, rateOfInterest);
console.log(sbiDetails);

for (const key in sbiDetails) {
    if (sbiDetails.hasOwnProperty(key)) {
        console.log(`${key}: ${sbiDetails[key]}`);
    }
}

