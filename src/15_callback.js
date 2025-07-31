// Method - 1


// Step -1: 
// The API provider writes a caller function(API) which accepts a function called callback function
// and invoke this callback function anywhere inside the API definition.

// Following is the caller function API 

function doMath(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

// Step-2:
// The consumer writes a function (the callback) and pass this function to API as an argument.

function myCallback(result) {
  result = result**2
  console.log("Result is:", result);
}

// So here 'doMath' is an API which is defined to take two parameters and one function (callback)
// Here 'myCallback' is the callback function, The number of parameters can be any. We can pass array or even objects.

// We can call 'doMath' API as below

// doMath(5, 3, myCallback);

// The caller is responsible for passing the right parameters into the callback function.

// Method - 2

// API

function checkNumber(num, callback) {
  console.log(callback.toString())
  let shouldProceed = callback(num);
  if (shouldProceed) {
    console.log("Proceeding with:", num);
  } else {
    console.log("Not allowed");
  }
}

// Calling this API using Arrow Function

checkNumber(10, (n) => n > 5);  // returns true → prints "Proceeding with: 10"
checkNumber(2, (n) => n > 5);   // returns false → prints "Not allowed"



