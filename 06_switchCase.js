var monthOfYear = function (month) {
  switch (month) {
    case 1:
      console.log(`${month} - jan`);
      break;
    case 2:
      console.log(`${month} - feb`);
      break;
    case 3:
      console.log(`${month} - mar`);
      break;
    case 4:
      console.log(`${month} - april`);
      break;
    case 5:
      console.log(`${month} - may`);
      break;
    case 6:
      console.log(`${month} - june`);
      break;
    case 7:
      console.log(`${month} - july`);
      break;
    case 8:
      console.log(`${month} - aug`);
      break;
    case 9:
      console.log(`${month} - sep`);
      break;
    case 10:
      console.log(`${month} - oct`);
      break;
    case 11:
      console.log(`${month} - nov`);
      break;
    case 12:
      console.log(`${month} - december`);
      break;

    default:
      console.log(`${month} -  invalid input`);
      break;
  }
};

monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
