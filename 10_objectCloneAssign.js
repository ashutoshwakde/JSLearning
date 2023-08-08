
personalDetail = {
    firstName : "Ashutosh",
    lastName : "Wakde",
    age : 22,
    collegeName : "Mauli COllege"
}

collegeDetails = {
    collegeName : "Mauli COllege",
    city : "Shegaon",
    year : 1990,
    founder : "Dnyaneshwar Patil"
}

let mergedObject = Object.assign({} , personalDetail, collegeDetails);
console.table(mergedObject);

console.log(`----------------------------------------------------------------------`);


let friends = ["Jayant", "Harshad", "Ashish", "Kapil", "Swapnil"]
let frz = Object.freeze(friends)
console.log(`${frz}`);
friends["Jayant"] = "sonu"
console.log(friends);


console.log(`----------------------------------------------------------------------`);


for (const element of friends) {
    console.log(element);
  }

  console.log(`----------------------------------------------------------------------`);









