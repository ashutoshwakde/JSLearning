function stringhandsOn() {
  console.log(`------------------STEP 1------------------`);
  var string = `      Hey you are doing good, keep it up     `;
  console.log(`Given string : ${string}`);

  console.log(`------------------STEP 2------------------`);
  console.log(`Length of string is : ${string.length}`);

  console.log(`------------------STEP 3------------------`);
  var spaces = string.trim();
  console.log(`After trim string is : ${spaces} , After trim length : ${spaces.length}`);

  console.log(`------------------STEP 4------------------`);
  var result = string.trim();
  var extraSpace = string.length - result.length;
  console.log(`Removed Space : ${extraSpace}`);

  console.log(`------------------STEP 5------------------`);
  var charAt0 = spaces.charAt(0);
  var charAtEnd = spaces.charAt(33);
  console.log(`After trim first character is : ${charAt0} , Last Character is : ${charAtEnd}`);

  console.log(`------------------STEP 6------------------`);
  console.log(`Total number of words - ${spaces.length}`);

  console.log(`------------------STEP 7------------------`);
  var result = spaces.indexOf(`good`);
  console.log(`Index of "good" is : ${result}`);

  console.log(`------------------STEP 8------------------`);
  var result = spaces.substring(22);
  console.log(`Substring starting from index 22 is : ${result}`);

  console.log(`------------------STEP 9------------------`);
  var result = spaces.includes(`up`);
  console.log(`String ends with word "up" : ${result}`);

  console.log(`------------------STEP 10------------------`);
  var result = spaces.includes(`Hey`);
  console.log(`String starts with 'Hey': ${result}`);
}
stringhandsOn();
