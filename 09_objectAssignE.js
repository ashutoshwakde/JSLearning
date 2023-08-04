


// let sbiBank = {
//   bankName : "SBI BANK",
//   location : "Amravati",
//   accountNo : "1234567890",
//   ifsc : "SBIN0004554",
//   interestRate : "3.00%",
//   getsbiBank: function(){
//     console.log(`Bank Address: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${interestRate}`);
//  }
// }
// console.log(sbiBank);

// let hdfcBank = {
//   bankName : "HDFC BANK",
//   location : "Nagpur",
//   accountNo : "0987654321",
//   ifsc : "HDFC00004579",
//   interestRate : "4.00%",
//   gethdfcBank: function(){
//     console.log(`Bank Address: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${interestRate}`);
//  }  
// }
// console.log(hdfcBank);

// let yesBank = {
//   bankName : "YES BANK",
//   location : "Mumbai",
//   accountNo : "6578456345",
//   ifsc : "YESB0B04554",
//   interestRate : "5.00%",  
//   getyesBank: function(){
//     console.log(`Bank Address: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}, ${interestRate}`);
//  }
// }
// console.log(yesBank);






const sbiBank = {
  bankName : 'SBI',
  location : 'Shegaon',
  accountNo : 1234567890,
  ifsc : 'SBI98766555',
  interestRate : 3.00 ,
   showDetails : function(){
      console.log(sbiBank);
   }
}
sbiBank.showDetails()
const hdfcBank = {
  bankName : 'HDFC Bank',
  location : 'Akola',
  accountNo : 9212345562,
  ifsc : 'HDFC898787878',
  interestRate : 4.00 ,
   showDetails : function(){
      console.log(hdfcBank);
   }
}
hdfcBank.showDetails()
const yesBank= {
  bankName : 'Yes Bank',
  location : 'Buldhana',
  accountNo : 6579764568,
  ifsc : 'YES78786767',
  interestRate : 5.00 ,
   showDetails : function(){
      console.log(yesBank);
   }
}
yesBank.showDetails()