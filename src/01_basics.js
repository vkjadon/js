// "use strict"; // treat all JS code as newer version 

const accountId = 27651967
let accountEmail = "vkj@abc.com"
var accountPassword = "12345"
accountCity = "Chandigarh"          
// Above Syntax is not allowed in Strict Mode. 
// Uncomment the first line to see in action

let accountState;

accountEmail = "vkj@xyz.com"
accountPassword = "23145as"
accountCity = "Delhi"

// accountId = 2 is not allowed as it is declared as constant

console.log(accountId);

// Prefer not to use var

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// ***********
// Conversions
// ***********

let random = "67"    // Try July67, true and false

//console.log(typeof(random));

let valueInNumber = Number(random)

//console.log(valueInNumber);
//console.log(typeof(valueInNumber));

let booleanIsLoggedIn = Boolean(random)
//  console.log(booleanIsLoggedIn);
//  console.log(typeof(booleanIsLoggedIn));


let stringNumber = String(random)
// console.log(stringNumber);
// console.log(typeof(stringNumber));

// *****************
// *** Operators ***
// *****************

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " VKJ"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === Strict Comparison (value and data type)

console.log("2" === 2);

