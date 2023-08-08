
class vehicle {
    constructor(vehicleName, model, color, company, price ){
      this.vehicleName = vehicleName;
      this.model = model;
      this.color = color;
      this.company = company;
      this.price = price;
    }
    show(){
      console.log(`Vehicle name is: ${this.vehicleName} , model: ${this.model}
      color: ${this.color}, company: ${this.company}, price : ${this.price}`);
    }
  
  }

  let vehicle1 = new vehicle ("Maruti Alto", "Alto23", "Red", "Maruti Suzuki", 360000)
  let vehicle2 = new vehicle ("Ford Mustang 1969", "Mus29", "Black", "Ford Motors", 22220000)
  let vehicle3 = new vehicle ("Lamborgini Huracan", "Hur20", "orange", "Lamborgini", 32020000)
  let vehicle4 = new vehicle ("Splendor", "spl644", "Black", "Hero MotoCorp", 70000)
  let vehicle5 = new vehicle ("Vitara Brezza", "Bree676", "BLue", "Maruti Suzuki", 960000)

  const arrayOfVehicles = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];
  for (const vehicle of arrayOfVehicles) {
     vehicle.show();
  }


  console.log(`----------------------------------------------------------------------------`);




  class college {
    constructor(collegeName, year, city, founderName){
      this.collegeName = collegeName;
      this.year = year;
      this.city = city;
      this.founderName = founderName;
    }
    display(){
      console.log(`College name is: ${this.collegeName} , Establish in: ${this.year}
      city is: ${this.city}, founder is: ${this.founderName}`);
    }
  
  }

  const SSGMCE = new college("SSGMCE", 1970, "shegaon", "Dnyaneshwar Patil");
  console.log(SSGMCE);
 
  let mauli = new college("MGICOET", 1990, "shegaon", "Ganesh Patil");
  console.log(mauli);
 
  let shivaji = new college("Shivali College", 2001, "Udaynagar", "Santosh Patil");
  console.log(shivaji);

  let shivajisenior = new college("Shivali College", 2001, "Chikhli", "Umesh Patil");
  console.log(shivajisenior);





















//   console.log(`----------------------------------- Step 1 --------------------------------------`);
// class Vehicle {
//     constructor(name, transmission, enginePower, mileage, seats ){
//       this.name = name;
//       this.transmission = transmission;
//       this.enginePower = enginePower;
//       this.mileage = mileage;
//       this.seats = seats;
//     }
//     show(){
//       console.log(`Vehicle Name is : ${this.name} , Plate Number : ${this.transmission} , Engine Power: ${this.enginePower} , Mileage : ${this.mileage}, Seats : ${this.seats}
//       `);
//     }
  
//   }
//   let ferrari =    new Vehicle("Ferrari 488                ","Automatic  ","660 bhp","8.77 kmpl    ",5)
//   let mclaren =    new Vehicle("Mclaren GT                 ","Automatic  ","611 bhp","8.2 kmpl     ",5)
//   let lamorghini = new Vehicle("Lamborghini Aventador      ","Automatic  ","760 bhp","7.69 kmpl    ",2)
//   let mercedes =   new Vehicle("Mercedes-Benz AMG GT       ","Automatic  ","476 bhp","8.77 kmpl    ",5)
//   let audi =       new Vehicle("Audi e-tron GT             ","Automatic  ","523 bhp","388 km/charge",5)

//   const arrayOfVehicles = [ferrari, mclaren, lamorghini, mercedes, audi];
//   console.log(`Traversing array of vehicles
//   ---------------------------------------------------`);
//   for (const vehicle of arrayOfVehicles) {
//     vehicle.show();
//   }
//   console.log(`----------------------------------- Step 2 --------------------------------------`);
//   class College {
//     constructor (stuName,branch,year,cgpa,){
//         this.stuName =stuName;
//         this.branch =branch;
//         this.year= year;
//         this.cgpa= cgpa;
//     }
//     display(){
//         console.log(`Student Name is : ${this.stuName} , Branch : ${this.branch} , Year: ${this.year} , CGPA : ${this.cgpa}
//         `);
//       }
       
//   }
//   let ram =     new College("Ram    "," Mechanical", 4  ,8.68)
//   let shyam =   new College("Shyam  "," CSE       ", 4  ,8)
//   let radha =   new College("Radha  "," Civil     ", 4  ,9.32)
//   let krishna = new College("Krishna"," Mechanical", 4  ,9.38)
//   ram.display()
//   shyam.display()
//   radha.display()
//   krishna.display()
//   console.log(`----------------------------------- Step 3 --------------------------------------`);
 
//   traverseObject = function(arg){
//     for (const key in arg) {
//         if (College.hasOwnProperty.call(arg, key)) {
//             const element = arg[key];
//             console.log(`Key: ${key}, value : ${element}`);
//         }
//     }
// }
// traverseObject(ram)
// console.log(`---------------------------------`);

// traverseObject(shyam)
// console.log(`---------------------------------`);

// traverseObject(radha)
// console.log(`---------------------------------`);

// traverseObject(krishna)